import { FC } from 'react';
import { Link } from 'react-router-dom';

const LinkMain: FC = () => {
  return (
    <p>
      Glad to see you again. Visit our <Link to="/main">Main page</Link>.
    </p>
  );
};

export default LinkMain;
