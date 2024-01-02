import { FormEvent, useState } from 'react';
import Btn from '@/components/Btn/Btn';
import styles from './headers-editor.module.scss';
import IHeaders from '@/model/components/HeadersEditor/HeadersEditor';
import IconDelete from '@/components/IconDelete/IconDelete';
import HeaderInputName from '@/model/components/HeadersEditor/HeaderInputName';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectContentGraphiQl } from '@/store/slices/languageSlice';
import {
  selectHeadersValue,
  setHeadersValue,
} from '@/store/slices/headersSlice';

const HeadersEditor: React.FC = (): JSX.Element => {
  const headersValue = useAppSelector(selectHeadersValue);
  const [headers, setHeaders] = useState<IHeaders[]>(headersValue);
  const content = useAppSelector(selectContentGraphiQl);
  const dispatch = useAppDispatch();

  const handleAddHeader = () =>
    setHeaders([...headers, { headerKey: '', value: '' }]);

  const handleRemoveHeader = (index: number) =>
    setHeaders((prev) => prev.filter((_, i) => i !== index));

  const handleHeaderChange = (
    index: number,
    keyOrValue: HeaderInputName.HEADER_KEY | HeaderInputName.VALUE,
    newValue: string
  ) =>
    setHeaders(
      headers.map((header, i) =>
        i === index ? { ...header, [keyOrValue]: newValue } : header
      )
    );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(setHeadersValue(headers));
  };

  return (
    <form className={styles['headers-editor']} onSubmit={handleSubmit}>
      <div className={styles['headers-editor__item_wrapper']}>
        {headers.map((header, index) => (
          <div className={styles['headers-editor__item']} key={index}>
            <span className={styles['headers-editor__item_num']}>
              {index + 1}
            </span>
            <input
              type="text"
              className={styles['headers-editor__item_input']}
              placeholder={content.headersPlaceholderKey}
              value={header.headerKey}
              onChange={(e) =>
                handleHeaderChange(
                  index,
                  HeaderInputName.HEADER_KEY,
                  e.target.value
                )
              }
            />
            <input
              type="text"
              className={styles['headers-editor__item_input']}
              placeholder={content.headersPlaceholderValue}
              value={header.value}
              onChange={(e) =>
                handleHeaderChange(index, HeaderInputName.VALUE, e.target.value)
              }
            />
            <Btn
              className={styles['headers-editor__item_btn-del']}
              type="button"
              onClick={() => handleRemoveHeader(index)}
              title={content.headersBtnTitleDel}
            >
              <IconDelete />
            </Btn>
          </div>
        ))}
      </div>
      <div className={styles['headers-editor__btn-wrapper']}>
        <Btn
          className={styles['headers-editor__btn-wrapper_item']}
          type="button"
          onClick={handleAddHeader}
        >
          {content.headersBtnNameHeader}
        </Btn>
        <Btn
          className={styles['headers-editor__btn-wrapper_item']}
          type="submit"
        >
          {content.headersBtnNameSetHeader}
        </Btn>
      </div>
    </form>
  );
};

export default HeadersEditor;
