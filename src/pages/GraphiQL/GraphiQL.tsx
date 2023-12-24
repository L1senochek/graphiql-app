import { useAppSelector } from '@/store/hooks';
import { selectFirebaseUser } from '@/store/slices/firebaseUserSlice';
import { RootState } from '@/store/store';
import { auth, logout } from '@/utils/firebase/firebase';
import { useEffect } from 'react';

const GraphiQL: React.FC = (): JSX.Element => {
  const isAuth = useAppSelector((state: RootState) => state.authSlice.auth);
  console.log(isAuth, 'isAuth');
  const user = useAppSelector(selectFirebaseUser);
  console.log(user, 'user');

  useEffect(() => {
    console.log(auth, 'authhhhhhh');
  }, []);

  return <div onClick={logout}>GraphiQL</div>;
};

export default GraphiQL;
