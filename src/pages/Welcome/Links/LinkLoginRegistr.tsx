import { Link } from 'react-router-dom';

const LinkLoginRegistr = () => {
  return (
    <p>
      Please, <Link to="/login">login</Link> or{' '}
      <Link to="/register">register</Link> to start using our GraphiQL
    </p>
  );
};

export default LinkLoginRegistr;
