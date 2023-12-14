import { FC } from 'react';
import GitHubLogo from '@/components/iconGitHub/iconGitHub';
import styles from './GitHub.module.scss';
import GitHubUsers from './GitHubUsers';

const GitHub: FC = () => {
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
          <span>{user.name}</span>
        </a>
      ))}
    </div>
  );
};

export default GitHub;
