import React, { useState } from 'react';
import IconSettings from '@/components/IconSettings/IconSettings';
import ISettings from '@/model/components/Settings/Settings';
import SettingsLanguage from '@/components/SettingsLanguage/SettingsLanguage';
import styles from './settings.module.scss';

const Settings: React.FC<ISettings> = ({ parentClass }): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className={`${styles['settings']}${parentClass ? ` ${parentClass}` : ''}`}
    >
      <div
        className={`${styles['settings__btn']}${
          isMenuOpen ? ` ${styles['open']}` : ''
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <IconSettings />
      </div>
      <div
        className={`${styles['settings__menu']}${
          isMenuOpen ? ` ${styles['open']}` : ''
        }`}
      >
        <SettingsLanguage />
      </div>
    </div>
  );
};

export default Settings;
