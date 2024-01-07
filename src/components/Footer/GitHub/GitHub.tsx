import { FC } from 'react';
import GitHubLogo from '@/components/iconGitHub/iconGitHub';
import styles from './GitHub.module.scss';
import GitHubUsers from './GitHubUsers';
import { useAppSelector } from '@/store/hooks';
import { selectEng } from '@/store/slices/languageSlice/languageSlice';

const GitHub: FC = () => {
  const isEn = useAppSelector(selectEng);

  return (
    <div className={styles.wrapper}>
      {GitHubUsers.map((user, index) => (
        <a
          key={index}
          href={user.url}
          className={styles.github}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubLogo />
          <span>{isEn ? user.name.eng : user.name.ru}</span>
        </a>
      ))}
    </div>
  );
};

export default GitHub;
