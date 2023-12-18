import React from 'react';
import styles from './icon-run.module.scss';

const IconRun: React.FC = (): JSX.Element => {
  return (
    <svg
      width="800px"
      height="800px"
      className={styles['icon-run']}
      viewBox="-3 0 28 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Icon-Set-Filled"
          className={styles['icon-run__set-filled']}
          transform="translate(-416.000000, -571.000000)"
          fill="#000000"
        >
          <path
            d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
            id="play"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default IconRun;
