import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_PATH } from '@/utils/const/const';
import styles from './header.module.scss';
import IconSettings from '@/components/IconSettings/IconSettings';
import Btn from '@/components/Btn/Btn';

const Header: React.FC = (): JSX.Element => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.onscroll = handleScroll;

    return (): void => {
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isSticky ? styles['sticky'] : ''}`}
      >
        <div className={styles['header__wrapper']}>
          <div className={styles['header__left-side']}>
            <Link to={INITIAL_PATH}>
              <h2>Welcome</h2>
            </Link>
          </div>
          <div className={styles['header__right-side']}>
            <button className={`${styles['header__btn']} btn`}>Sign Out</button>
            <Btn className={styles['header__btn']}>Sign Out</Btn>
            <IconSettings />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
