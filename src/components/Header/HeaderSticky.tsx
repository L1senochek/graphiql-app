import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { INITIAL_PATH, WELCOME_PATH } from '@/utils/const/const';
import styles from './header.module.scss';
import Btn from '@/components/Btn/Btn';
import Settings from '@/components/Settings/Settings';
import contentJson from '@/utils/jsons/HeaderContent/headerContent.json';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { setAuth } from '@/store/slices/AuthSlice';

const Header: React.FC = (): JSX.Element => {
  const [isSticky, setIsSticky] = useState(false);
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);
  const content = isEn ? contentJson.eng : contentJson.ru;
  const isAuth = useAppSelector((state: RootState) => state.authSlice.auth);
  const location = useLocation();
  const dispatch = useAppDispatch();

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
              <h2>{content.title}</h2>
              <span
                className={`${styles['header__line']}${
                  location.pathname === WELCOME_PATH
                    ? ` ${styles['active']}`
                    : ''
                }`}
              ></span>
            </Link>
          </div>
          <div className={styles['header__right-side']}>
            <div className={styles['header__btn-wrapper']}>
              {!isAuth ? (
                <>
                  <Btn className={styles['header__btn']}>
                    {content.btnSignIn}
                  </Btn>
                  <Btn className={styles['header__btn']}>
                    {content.btnSignUp}
                  </Btn>
                </>
              ) : (
                <Btn
                  className={styles['header__btn']}
                  onClick={() => dispatch(setAuth(false))}
                >
                  {content.btnSignOut}
                </Btn>
              )}
            </div>
            <Settings parentClass={styles['header__settings']} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
