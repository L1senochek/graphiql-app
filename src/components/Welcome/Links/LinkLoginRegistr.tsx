import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN_PATH } from '@/utils/const/const';
import { SIGN_UP_PATH } from '@/utils/const/const';

const LinkLoginRegistr: FC = () => {
  return (
    <h3>
      Please, <Link to={SIGN_IN_PATH}>sign-in</Link> or{' '}
      <Link to={SIGN_UP_PATH}>sign-up</Link> to start using our GraphiQL
    </h3>
  );
};

export default LinkLoginRegistr;
