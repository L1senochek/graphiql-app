import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  INITIAL_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
  WELCOME_PATH,
} from '@/utils/const/const';
import styles from './header.module.scss';
import Btn from '@/components/Btn/Btn';
import Settings from '@/components/Settings/Settings';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectAuth, setAuth } from '@/store/slices/authSlice';
import { selectContentHeader } from '@/store/slices/languageSlice';

const Header: React.FC = (): JSX.Element => {
  const [isSticky, setIsSticky] = useState(false);
  const content = useAppSelector(selectContentHeader);
  const isAuth = useAppSelector(selectAuth);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
                  <Btn
                    className={styles['header__btn']}
                    onClick={() => navigate(SIGN_IN_PATH)}
                  >
                    {content.btnSignIn}
                  </Btn>
                  <Btn
                    className={styles['header__btn']}
                    onClick={() => navigate(SIGN_UP_PATH)}
                  >
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
