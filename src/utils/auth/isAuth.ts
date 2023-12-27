import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { redirect } from 'react-router';
import { WELCOME_PATH } from '@/utils/const/const';
import { setAuth } from '@/store/slices/authSlice';
import { Dispatch } from '@reduxjs/toolkit';
import { setUserDisplayName } from '@/store/slices/firebaseUserSlice';

const isAuthFirebase = (dispatch: Dispatch): void => {
  const auth = getAuth();

  onAuthStateChanged(auth, (user: User | null) => {
    if (!user?.email) {
      redirect(WELCOME_PATH);
    } else {
      dispatch(setUserDisplayName(user.displayName!));
      dispatch(setAuth(true));
    }
  });
};

export default isAuthFirebase;
