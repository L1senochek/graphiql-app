import React from 'react';
import Btn from '@/components//Btn/Btn';
import styles from './settings-language.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setEng } from '@/store/slices/languageSlice';
import { RootState } from '@/store/store';

const SettingsLanguage: React.FC = ({
  parentClass,
}: {
  parentClass?: string;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);

  return (
    <div
      className={`${styles['settings-language']}${
        parentClass ? ` ${parentClass}` : ''
      }`}
    >
      <span className={styles['settings-language__item']}>Ru</span>
      <Btn
        role="switch"
        onClick={() => dispatch(setEng(!isEn))}
        className={styles['settings-language__btn']}
      >
        <div
          className={`${styles['settings-language__switcher']} ${
            isEn ? styles.en : styles.ru
          }`}
        ></div>
      </Btn>
      <span className={styles['settings-language__item']}>En</span>
    </div>
  );
};

export default SettingsLanguage;
