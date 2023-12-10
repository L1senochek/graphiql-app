import styles from './welcome.module.scss';
import Link from './Links/Link';
import content from './content.json';
import Team from './Team/Team';

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
