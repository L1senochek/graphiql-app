import { FC } from 'react';
import LinkLoginRegistr from './LinkLoginRegistr';
import LinkMain from './LinkMain';

const Link: FC = () => {
  return <LinkLoginRegistr /> ? <LinkLoginRegistr /> : <LinkMain />;
};

export default Link;
