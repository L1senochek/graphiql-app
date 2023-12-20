import { ChangeEvent, useState } from 'react';
import styles from './query-editor-viewer.module.scss';
import resJson from './resTest.json';

interface IQueryEditorViewer {
  viewJson?: boolean;
}

const QueryEditorViewer: React.FC<IQueryEditorViewer> = ({
  viewJson,
}): JSX.Element => {
  const [code, setCode] = useState('');
  const formattedJson = JSON.stringify(resJson, null, 2);
  const lineNumbers = code.split('\n').map((_, index) => index + 1);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  return (
    <div className={styles['query-editor-viewer']}>
      {viewJson ? (
        <pre className={styles['query-editor-viewer__pre']}>
          {formattedJson}
        </pre>
      ) : (
        <div className={styles['query-editor-viewer__code-editor']}>
          <div className={styles['query-editor-viewer__line-numbers']}>
            {lineNumbers.map((number) => (
              <span
                className={styles['query-editor-viewer__line-numbers_item']}
                key={number}
              >
                {number}
              </span>
            ))}
          </div>
          <div className={styles['query-editor-viewer__textarea-wrapper']}>
            <textarea
              className={styles['query-editor-viewer__textarea']}
              value={code}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QueryEditorViewer;
