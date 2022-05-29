import React from 'react';
import SignUpButtons from 'components/molecules/SignUpButtons/SignUpButtons/SignUpButtons';
import CylinderButton from 'components/atoms/CylinderButton/CylinderButton';
import { FaTwitter } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { ContentWrapper, SignInWrapper, SignInSignUpWrapper } from './UnauthenticatedAppView.styles';
import { useDispatch } from 'react-redux';
import { handleSignInModalOpen } from 'store/slices/isSignInModalOpenSlice';

const UnauthenticatedAppView = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const openSignInModal = () => dispatch(handleSignInModalOpen());

  return (
    <SignInSignUpWrapper>
      <ContentWrapper>
        <FaTwitter color={theme.colors.twBlue} size={42} />
        <h1>The latest news from the world</h1>
        <SignUpButtons />
        <SignInWrapper>
          <h3>Already have an account?</h3>
          <CylinderButton textColor="blue" onClick={openSignInModal}>
            <strong>Sign in</strong>
          </CylinderButton>
        </SignInWrapper>
      </ContentWrapper>
    </SignInSignUpWrapper>
  );
};

export default UnauthenticatedAppView;
