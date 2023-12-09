import { Link } from 'react-router-dom';

const LinkMain = () => {
  return (
    <p>
      Glad to see you again. Visit our <Link to="/main">Main page</Link>.
    </p>
  );
};

export default LinkMain;
