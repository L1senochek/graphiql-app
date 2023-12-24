import { ChangeEvent, useState } from 'react';
import IconLoupe from '@/components/IconLoupe/IconLoupe';
import styles from './headers-editor.module.scss';
import Btn from '@/components/Btn/Btn';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  selectInputValue,
  setHeadersInputValue,
} from '@/store/slices/headerEditorSlice';

const HeadersEditor: React.FC = (): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const headersValue = useAppSelector(selectInputValue);
  const dispatch = useAppDispatch();

  const headersChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    dispatch(setHeadersInputValue(value));
  };

  const btnClick = (): void => {
    console.log('headersValue', headersValue);
  };

  const keyUp = (event: React.KeyboardEvent<HTMLInputElement>): void | null =>
    event.key === 'Enter' ? btnClick() : null;

  return (
    <div className={styles['headers-editor']}>
      <div
        className={`${styles['headers-editor__wrapper']}${
          isFocused ? ` ${styles['focused']}` : ''
        }`}
      >
        <Btn className={styles['headers-editor__loupe']} onClick={btnClick}>
          <IconLoupe />
        </Btn>
        <input
          className={styles['headers-editor__input']}
          type="search"
          placeholder="http://api-example.com"
          id="headers-editor"
          value={headersValue}
          onChange={headersChange}
          onKeyUp={keyUp}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default HeadersEditor;
