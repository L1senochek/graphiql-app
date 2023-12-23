import styles from './query-editor-viewer.module.scss';
import resJson from './resTest.json';
import IQueryEditorViewer from '@/model/components/QueryEditorViewer/QueryEditorViewer';
import CodeEditor from '@/components/CodeEditor/CodeEditor';
import {
  selectRequestCode,
  selectRequestLineNumbers,
  setRequestCode,
  setRequestLineNumbers,
} from '@/store/slices/queryEditorSlice';
import { useAppSelector } from '@/store/hooks';

const QueryEditorViewer: React.FC<IQueryEditorViewer> = ({
  viewJson,
}): JSX.Element => {
  const requestCode = useAppSelector(selectRequestCode);
  const requestLineNumbers = useAppSelector(selectRequestLineNumbers);
  const formattedJson = JSON.stringify(resJson, null, 2);

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
          lineNumbers={requestLineNumbers}
          setLineNumbers={setRequestLineNumbers}
          classNameCodeEditor={styles['query-editor-viewer__code-editor']}
        />
      )}
    </div>
  );
};

export default QueryEditorViewer;
