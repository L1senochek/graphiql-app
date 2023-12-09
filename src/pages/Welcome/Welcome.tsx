import styles from './welcome.module.scss';
import Link from './Links/Link';
import content from './content.json';
import Team from './Team/Team';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <h1>{content.welcomeTitle}</h1>
      <div className={styles.description}>
        <h2>{content.description}</h2>
        <Team />
      </div>
      <Link />
    </div>
  );
};

export default Welcome;
