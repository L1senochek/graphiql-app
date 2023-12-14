import Link from '@/components/Welcome/Links/Link';
import Team from '@/components/Welcome/Team/Team';
import contentJson from '@/utils/jsons/WelcomeContent/WelcomeContent.json';
import styles from './welcome.module.scss';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const Welcome = () => {
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);
  const content = isEn ? contentJson.en : contentJson.ru;

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
