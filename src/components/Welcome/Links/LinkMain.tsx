import { FC } from 'react';
import { Link } from 'react-router-dom';
import { GRAPHI_QL_PATH } from '@/utils/const/const';

const LinkMain: FC = () => {
  return (
    <p>
      Glad to see you again. Visit our{' '}
      <Link to={GRAPHI_QL_PATH}>Main page</Link>.
    </p>
  );
};

export default LinkMain;
