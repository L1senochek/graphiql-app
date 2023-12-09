import LinkLoginRegistr from './LinkLoginRegistr';
import LinkMain from './LinkMain';

const Link = () => {
  return <LinkMain /> ? <LinkMain /> : <LinkLoginRegistr />;
};

export default Link;
