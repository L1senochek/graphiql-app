import Link from '@/components/Welcome/Links/Link';
import Team from '@/components/Welcome/Team/Team';
import contentJson from '@/utils/jsons/WelcomeContent/WelcomeContent.json';
import styles from './welcome.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import isAuthFirebase from '@/utils/auth/isAuth';

const Welcome = () => {
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);
  const content = isEn ? contentJson.eng : contentJson.ru;
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
