import { auth, firestore } from 'firebase-config';
import { addDoc, collection, collectionGroup, deleteDoc, doc, getDoc, getDocs, limit, onSnapshot, orderBy, query, setDoc, where } from 'firebase/firestore';
import { useCallback } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const useFirebase = () => {
  const customCreateUserWithEmailAndPassword = useCallback(async (email, password) => {
    try {
      // Create user in auth and get response
      const authResponse = await createUserWithEmailAndPassword(auth, email, password);
      // Set id in local storage
      localStorage.setItem('token', authResponse.user.uid);
      // Return id from response
      return authResponse.user.uid;
    } catch (error) {
      console.log('handleCreateUserWithEmailAndPassword error:', error.code);
    }
  }, []);

  const setUserDoc = useCallback(async (id, data) => {
    try {
      // Create document
      const document = doc(firestore, 'users', id);
      // Set (requires id) document to firestore firestore
      await setDoc(document, { ...data });
    } catch (err) {
      console.log('setUserDoc: ', err);
    }
  }, []);

  const customSignInWithLoginAndPassword = useCallback(async (email, password) => {
    try {
      // Send query to auth and recieve response with uid in it
      const authResponse = await signInWithEmailAndPassword(auth, email, password);
      // Set id in local storage
      localStorage.setItem('token', authResponse.user.uid);
      // Return user id
      return authResponse.user.uid;
    } catch (err) {
      // Return error if sth happens
      return { ...err };
    }
  }, []);

  const getUserDocById = useCallback(async (id) => {
    try {
      // Create ref to doc based on id
      const docRef = doc(firestore, 'users', id);
      // Get doc
      const firebaseResponse = await getDoc(docRef);
      // Return object with data and uid
      const user = {
        id,
        ...firebaseResponse.data(),
      };
      return user;
    } catch (err) {
      // Return error if sth happens
      return err.code;
    }
  }, []);

  const logOut = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const addTweetDoc = useCallback(async (data) => {
    try {
      // Create collection ref
      const collectionRef = collection(firestore, `users/${data.authorId}/tweets`);
      // Create document
      await addDoc(collectionRef, data);
    } catch (err) {
      console.log(`catch error: `, err);
    }
  }, []);

  const deleteTweetDocById = useCallback(async (tweetId, authorId) => {
    try {
      console.log(tweetId, authorId);
      // Create ref to doc based on id
      const docRef = doc(firestore, `users/${authorId}/tweets`, tweetId);
      // Delete doc
      const firebaseResponse = await deleteDoc(docRef);
      // Return object with data and uid
      console.log(`delete`, firebaseResponse);
    } catch (err) {
      // Return error if sth happens
      return err.code;
    }
  }, []);

  const getXLastTweets = useCallback(async (num) => {
    try {
      const tweetsCollectionGroup = collectionGroup(firestore, 'tweets');
      const q = query(tweetsCollectionGroup, orderBy('publicationDate', 'desc'), limit(num));
      const response = await getDocs(q);
      const arr = [];
      response.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
      return arr;
    } catch (err) {
      console.log('useFirebase getXLastTweets error', err);
    }
  }, []);

  const getXMostFollowedUsers = useCallback(async (usersNumber) => {
    try {
      const usersCollection = collection(firestore, 'users');
      const q = query(usersCollection, orderBy('followsAmount', 'desc'), limit(usersNumber));
      const response = await getDocs(q);
      if (!response) return;
      const arr = [];
      response.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
      return arr;
    } catch (err) {
      console.log('useFirebase getXMostFollowedUsers error:', err);
    }
  }, []);

  const listenForCollectionGroupChanges = useCallback((setTweets) => {
    try {
      const tweetsCollectionGroup = collectionGroup(firestore, 'tweets');
      const date = new Date();
      const q = query(tweetsCollectionGroup, orderBy('publicationDate', 'desc'), where('publicationDate', '>', date.getTime()));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        // Return if there are no docs returned
        if (querySnapshot.size === 0) return;
        // Set array for new Tweets
        const newTweets = [];
        // Fill array with new tweets
        querySnapshot.forEach((doc) => {
          newTweets.push({ id: doc.id, ...doc.data() });
        });
        // Update state
        setTweets((prevArray) => {
          // Set id list of tweets
          const idList = prevArray.map((tweet) => tweet.id);
          // Return merged arrays: 1 - filtered newTweets (if exists in prevArray, then remove) 2. prevArray of tweets
          // To prevent displaying the same tweet twice
          return [...newTweets.filter((tweet) => !idList.includes(tweet.id)), ...prevArray];
        });
      });
      return unsubscribe;
    } catch (err) {
      console.log('listenForCollectionGroupChanges:', listenForCollectionGroupChanges);
    }
  }, []);

  return {
    customCreateUserWithEmailAndPassword,
    setUserDoc,
    customSignInWithLoginAndPassword,
    getUserDocById,
    logOut,
    addTweetDoc,
    getXLastTweets,
    listenForCollectionGroupChanges,
    deleteTweetDocById,
    getXMostFollowedUsers,
  };
};

export default useFirebase;
