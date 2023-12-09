import React, { useState } from 'react';
import Btn from '@/components//Btn/Btn';
import styles from './settings-language.module.scss';

const SettingsLanguage: React.FC = ({
  parentClass,
}: {
  parentClass?: string;
}): JSX.Element => {
  const [isEn, setIsEn] = useState(true);
  return (
    <div
      className={`${styles['settings-language']}${
        parentClass ? ` ${parentClass}` : ''
      }`}
    >
      <span className={styles['settings-language__item']}>Ru</span>
      <Btn
        role="switch"
        onClick={() => setIsEn(!isEn)}
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
