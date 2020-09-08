import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {auth} from 'firebase';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    auth.GoogleAuthProvider.PROVIDER_ID,
    auth.GithubAuthProvider.PROVIDER_ID,
    auth.TwitterAuthProvider.PROVIDER_ID,
    'anonymous'
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const firebaseLogin = () =>
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()}/>

export default firebaseLogin;
