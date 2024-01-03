import { ChangeEvent, useState } from 'react';
import IconLoupe from '@/components/IconLoupe/IconLoupe';
import styles from './server-address.module.scss';
import Btn from '@/components/Btn/Btn';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  selectServerAddressInputValue,
  setServerAddressInputValue,
} from '@/store/slices/serverAddressSlice';

const ServerAddress: React.FC = (): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const serverAddressInputValue = useAppSelector(selectServerAddressInputValue);
  const [inputValue, setInputValue] = useState(serverAddressInputValue);
  const dispatch = useAppDispatch();

  const headersChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setInputValue(value);
  };

  const btnClick = (): void => {
    dispatch(setServerAddressInputValue(inputValue));
  };

  const keyUp = (event: React.KeyboardEvent<HTMLInputElement>): void | null =>
    event.key === 'Enter' ? btnClick() : null;

  return (
    <div className={styles['server-address']}>
      <div
        className={`${styles['server-address__wrapper']}${
          isFocused ? ` ${styles['focused']}` : ''
        }`}
      >
        <Btn className={styles['server-address__loupe']} onClick={btnClick}>
          <IconLoupe />
        </Btn>
        <input
          className={styles['server-address__input']}
          type="search"
          placeholder="http://api-example.com"
          id="server-address"
          value={inputValue}
          onChange={headersChange}
          onKeyUp={keyUp}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default ServerAddress;
