import { FormEvent, useState } from 'react';
import Btn from '@/components/Btn/Btn';
import styles from './headers-editor.module.scss';
import IHeaders from '@/model/components/HeadersEditor/HeadersEditor';
import IconDelete from '@/components/IconDelete/IconDelete';
import HeaderInputName from '@/model/components/HeadersEditor/HeaderInputName';

const HeadersEditor: React.FC = (): JSX.Element => {
  const [headers, setHeaders] = useState<IHeaders[]>([
    { headerKey: '', value: '' },
  ]);

  const handleAddHeader = () =>
    setHeaders([...headers, { headerKey: '', value: '' }]);

  const handleRemoveHeader = (index: number) => {
    const updatedHeaders = [...headers];
    updatedHeaders.splice(index, 1);
    setHeaders(updatedHeaders);
  };

  const handleHeaderChange = (
    index: number,
    keyOrValue: HeaderInputName.HEADER_KEY | HeaderInputName.VALUE,
    newValue: string
  ) => {
    const updatedHeaders = [...headers];
    updatedHeaders[index][keyOrValue] = newValue;
    setHeaders(updatedHeaders);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('headers', headers);
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
              placeholder="header key"
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
              placeholder="value"
              value={header.value}
              onChange={(e) =>
                handleHeaderChange(index, HeaderInputName.VALUE, e.target.value)
              }
            />
            <Btn
              className={styles['headers-editor__item_btn-del']}
              type="button"
              onClick={() => handleRemoveHeader(index)}
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
          + New header
        </Btn>
        <Btn
          className={styles['headers-editor__btn-wrapper_item']}
          type="submit"
        >
          Set shared headers
        </Btn>
      </div>
    </form>
  );
};

export default HeadersEditor;
