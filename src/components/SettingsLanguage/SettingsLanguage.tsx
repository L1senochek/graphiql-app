import React from 'react';
import Btn from '@/components/Btn/Btn';
import styles from './settings-language.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  selectContentHeader,
  selectEng,
  setEng,
} from '@/store/slices/languageSlice';

const SettingsLanguage: React.FC = ({
  parentClass,
}: {
  parentClass?: string;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const isEn = useAppSelector(selectEng);
  const content = useAppSelector(selectContentHeader);

  return (
    <div
      className={`${styles['settings-language']}${
        parentClass ? ` ${parentClass}` : ''
      }`}
    >
      <span className={styles['settings-language__item']}>
        {content.settingsLanguageRu}
      </span>
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
      <span className={styles['settings-language__item']}>
        {content.settingsLanguageEn}
      </span>
    </div>
  );
};

export default SettingsLanguage;
