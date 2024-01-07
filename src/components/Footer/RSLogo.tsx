import { FC } from 'react';
import RSsvg from '@/assets/svg/rs.svg';
import styles from './rslogo.module.scss';

const RSLogo: FC = () => {
  return (
    <a
      className={styles['rslogo-link']}
      href="https://rs.school/react/"
      target="_blank"
      rel="noreferrer"
    >
      <img src={RSsvg} alt="RSlogo" />
    </a>
  );
};

export default RSLogo;
