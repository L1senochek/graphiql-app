import { FC } from 'react';
import LinkLoginRegistr from './LinkLoginRegistr';
import LinkMain from './LinkMain';
import { useAppSelector } from '@/store/hooks';
import { selectAuth } from '@/store/slices/authSlice/authSlice';

const Link: FC = () => {
  const isAuth = useAppSelector(selectAuth);

  return !isAuth ? <LinkLoginRegistr /> : <LinkMain />;
};

export default Link;
