import { FC } from 'react';
import { Link } from 'react-router-dom';

const LinkLoginRegistr: FC = () => {
  return (
    <h3>
      Please, <Link to="/login">login</Link> or{' '}
      <Link to="/register">register</Link> to start using our GraphiQL
    </h3>
  );
};

export default LinkLoginRegistr;
