import { FormEvent, useState } from 'react';
import Btn from '@/components/Btn/Btn';
import styles from './headers-editor.module.scss';
import IHeaders from '@/model/components/HeadersEditor/HeadersEditor';

const HeadersEditor: React.FC = (): JSX.Element => {
  const [headers, setHeaders] = useState<IHeaders[]>([{ key: '', value: '' }]);

  const handleAddHeader = () =>
    setHeaders([...headers, { key: '', value: '' }]);

  const handleRemoveHeader = (index: number) => {
    const updatedHeaders = [...headers];
    updatedHeaders.splice(index, 1);
    setHeaders(updatedHeaders);
  };

  const handleHeaderChange = (
    index: number,
    keyOrValue: 'key' | 'value',
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
            <input
              type="text"
              className={styles['headers-editor__item_input']}
              placeholder="header key"
              value={header.key}
              onChange={(e) => handleHeaderChange(index, 'key', e.target.value)}
            />
            <input
              type="text"
              className={styles['headers-editor__item_input']}
              placeholder="value"
              value={header.value}
              onChange={(e) =>
                handleHeaderChange(index, 'value', e.target.value)
              }
            />
            <Btn
              className={styles['headers-editor__item_btn-del']}
              type="button"
              onClick={() => handleRemoveHeader(index)}
            >
              del
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
