import styles from './welcome.module.scss';
import Link from '../../components/Welcome/Links/Link';
import content from '../../utils/jsons/content.json';
import Team from '../../components/Welcome/Team/Team';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h2>{content.welcomeTitle}</h2>
      <div className={styles.description}>
        <h3>{content.description}</h3>
        <Link />
        <Team />
      </div>
    </div>
  );
};

export default Welcome;
