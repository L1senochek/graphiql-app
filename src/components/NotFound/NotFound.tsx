import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = (): JSX.Element => {
  return (
    <div>
      <h2>Page not found!</h2>
      <h2>404</h2>
      <Link to={'/'}>Go to the Home</Link>
    </div>
  );
};

export default NotFound;
