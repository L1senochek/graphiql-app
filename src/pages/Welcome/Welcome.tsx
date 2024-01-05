import Link from '@/components/Welcome/Links/Link';
import Team from '@/components/Welcome/Team/Team';
import styles from './welcome.module.scss';
import { useAppSelector } from '@/store/hooks';
import useAuthFirebase from '@/utils/auth/useAuthFirebase';
import { selectContentWelcome } from '@/store/slices/languageSlice';

const Welcome = () => {
  const content = useAppSelector(selectContentWelcome);
  useAuthFirebase();

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
