import Link from '@/components/Welcome/Links/Link';
import Team from '@/components/Welcome/Team/Team';
import styles from './welcome.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import isAuthFirebase from '@/utils/auth/isAuth';
import { selectContentWelcome } from '@/store/slices/languageSlice';

const Welcome = () => {
  const content = useAppSelector(selectContentWelcome);
  const dispatch = useAppDispatch();
  isAuthFirebase(dispatch);

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
