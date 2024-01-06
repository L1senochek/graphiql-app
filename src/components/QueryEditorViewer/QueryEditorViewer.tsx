import styles from './query-editor-viewer.module.scss';
import IQueryEditorViewer from '@/model/components/QueryEditorViewer/QueryEditorViewer';
import CodeEditor from '@/components/CodeEditor/CodeEditor';
import {
  selectRequestCode,
  selectRequestLineNumbers,
  setRequestCode,
  setRequestLineNumbers,
} from '@/store/slices/queryEditorSlice';
import { useAppSelector } from '@/store/hooks';
import { selectResponse } from '@/store/slices/requestResponseSlice';

const QueryEditorViewer: React.FC<IQueryEditorViewer> = ({
  viewJson,
}): JSX.Element => {
  const requestCode = useAppSelector(selectRequestCode);
  const requestLineNumbers = useAppSelector(selectRequestLineNumbers);
  const response = useAppSelector(selectResponse);
  const formattedJson = JSON.stringify(response, null, 2);

  return (
    <div className={styles['query-editor-viewer']}>
      {viewJson ? (
        <pre className={styles['query-editor-viewer__pre']}>
          {response ? formattedJson : response}
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
