import React from 'react';
import styles from './loading.module.scss';
import IconLoading from '@/components/IconLoading/IconLoading';

const Loading: React.FC = (): JSX.Element => {
  return (
    <div className={styles.loading}>
      <IconLoading />
    </div>
  );
};

export default Loading;
