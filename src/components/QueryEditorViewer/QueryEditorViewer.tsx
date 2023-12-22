import { useRef, useState } from 'react';
import styles from './query-editor-viewer.module.scss';
import resJson from './resTest.json';
import IQueryEditorViewer from '@/model/components/QueryEditorViewer/QueryEditorViewer';

const QueryEditorViewer: React.FC<IQueryEditorViewer> = ({
  viewJson,
}): JSX.Element => {
  const [code, setCode] = useState(`query ExampleQuery($characterId: ID!) {
  
}`);
  const formattedJson = JSON.stringify(resJson, null, 2);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [lineNumbers, setLineNumbers] = useState<number[]>([1, 2, 3]);

  const handleInput = () => {
    if (textareaRef.current) {
      const content = textareaRef.current.value;
      setCode(content);

      const lineCount = content.split('\n').length;
      const newLineNumbers = Array.from(
        { length: lineCount },
        (_, index) => index + 1
      );
      setLineNumbers(newLineNumbers);
    }
  };

  console.log(code);

  return (
    <div className={styles['query-editor-viewer']}>
      {viewJson ? (
        <pre className={styles['query-editor-viewer__pre']}>
          {formattedJson}
        </pre>
      ) : (
        <div className={styles['query-editor-viewer__code-editor-wrapper']}>
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
            <textarea
              className={styles['query-editor-viewer__code-area']}
              value={code}
              onChange={handleInput}
              ref={textareaRef}
              rows={lineNumbers.length}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QueryEditorViewer;
