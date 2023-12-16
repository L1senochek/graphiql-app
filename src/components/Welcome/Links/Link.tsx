import { FC } from 'react';
import LinkLoginRegistr from './LinkLoginRegistr';
import LinkMain from './LinkMain';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const Link: FC = () => {
  const isAuth = useAppSelector((state: RootState) => state.authSlice.auth);

  return !isAuth ? <LinkLoginRegistr /> : <LinkMain />;
};

export default Link;
