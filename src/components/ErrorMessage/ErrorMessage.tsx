import { FC } from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorMessage: FC = (): JSX.Element => {
  const error = useRouteError() as Error;

  return (
    <div>
      <h2>Error message:</h2>
      <h3>{error.message}</h3>
      <Link to={'/'}>Go to the Home</Link>
    </div>
  );
};

export default ErrorMessage;
