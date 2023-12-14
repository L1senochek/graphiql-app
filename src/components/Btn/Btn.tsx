import React from 'react';
import styles from './btn.module.scss';
import IBtn from '@/model/components/Btn/Btn';

const Btn: React.FC<IBtn> = ({ className, ...props }): JSX.Element => {
  return (
    <button
      className={`${styles.btn}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Btn;
