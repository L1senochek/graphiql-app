import { useRef, useState } from 'react';
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
  const editorRef = useRef<HTMLDivElement>(null);
  const [lineNumbers, setLineNumbers] = useState<number[]>([1]);

  const handleInput = () => {
    if (editorRef.current) {
      const content = editorRef.current.textContent || '';
      setCode(content);
      const lineCount = editorRef.current.childElementCount + 1;

      console.log(code, lineCount);
      const newLineNumbers = Array.from(
        { length: lineCount },
        (_, index) => index + 1
      );
      setLineNumbers(newLineNumbers);
    }
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
          <div
            className={styles['query-editor-viewer__code-area']}
            ref={editorRef}
            contentEditable
            onInput={handleInput}
          ></div>
        </div>
      )}
    </div>
  );
};

export default QueryEditorViewer;
