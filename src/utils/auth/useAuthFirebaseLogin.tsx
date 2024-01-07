import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { WELCOME_PATH } from '@/utils/const/const';
import { setAuth } from '@/store/slices/authSlice/authSlice';
import { setUserDisplayName } from '@/store/slices/firebaseUserSlice/firebaseUserSlice';
import { useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';

const useAuthFirebaseLogin = () => {
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        navigate(WELCOME_PATH);
        dispatch(setUserDisplayName(user.displayName!));
        dispatch(setAuth(true));
      }
    });
  }, [auth, dispatch, navigate]);
};

export default useAuthFirebaseLogin;
