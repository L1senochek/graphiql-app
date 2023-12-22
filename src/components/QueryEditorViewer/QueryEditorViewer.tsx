import { useState } from 'react';
import styles from './query-editor-viewer.module.scss';
import resJson from './resTest.json';
import IQueryEditorViewer from '@/model/components/QueryEditorViewer/QueryEditorViewer';
import CodeEditor from '@/components/CodeEditor/CodeEditor';

const QueryEditorViewer: React.FC<IQueryEditorViewer> = ({
  viewJson,
}): JSX.Element => {
  const [requestCode, setRequestCode] =
    useState(`query ExampleQuery($characterId: ID!) {
  
}`);
  const [lineNumbers, setLineNumbers] = useState<number[]>([1, 2, 3]);
  const formattedJson = JSON.stringify(resJson, null, 2);

  console.log(requestCode, 'requestCode');

  return (
    <div className={styles['query-editor-viewer']}>
      {viewJson ? (
        <pre className={styles['query-editor-viewer__pre']}>
          {formattedJson}
        </pre>
      ) : (
        <CodeEditor
          textareaCode={requestCode}
          setTextareaCode={setRequestCode}
          lineNumbers={lineNumbers}
          setLineNumbers={setLineNumbers}
          classNameCodeEditor={styles['query-editor-viewer__code-editor']}
        />
      )}
    </div>
  );
};

export default QueryEditorViewer;
