import { FC } from 'react';
import GitHub from './GitHub/GitHub';
import RSLogo from './RSLogo';
import styles from './footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <GitHub />
      <h3>2024</h3>
      <RSLogo />
    </div>
  );
};

export default Footer;
