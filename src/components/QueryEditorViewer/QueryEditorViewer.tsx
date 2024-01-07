import styles from './query-editor-viewer.module.scss';
import IQueryEditorViewer from '@/model/components/QueryEditorViewer/QueryEditorViewer';
import {
  selectRequestCode,
  selectRequestLineNumbers,
  setRequestCode,
  setRequestLineNumbers,
} from '@/store/slices/queryEditorSlice/queryEditorSlice';
import { useAppSelector } from '@/store/hooks';
import {
  selectLoadingRes,
  selectResponse,
} from '@/store/slices/requestResponseSlice/requestResponseSlice';
import { Suspense, lazy } from 'react';
import Loading from '@/components/Loading/Loading';

const LazyCodeEditor = lazy(() => import('@/components/CodeEditor/CodeEditor'));

const QueryEditorViewer: React.FC<IQueryEditorViewer> = ({
  viewJson,
}): JSX.Element => {
  const requestCode = useAppSelector(selectRequestCode);
  const requestLineNumbers = useAppSelector(selectRequestLineNumbers);
  const response = useAppSelector(selectResponse);
  const isLoading = useAppSelector(selectLoadingRes);
  const formattedJson = JSON.stringify(response, null, 2);

  return (
    <div className={styles['query-editor-viewer']}>
      <Suspense fallback={<Loading />}>
        {viewJson ? (
          isLoading ? (
            <Loading />
          ) : (
            <pre className={styles['query-editor-viewer__pre']}>
              {response ? formattedJson : response}
            </pre>
          )
        ) : (
          <LazyCodeEditor
            textareaCode={requestCode}
            setTextareaCode={setRequestCode}
            lineNumbers={requestLineNumbers}
            setLineNumbers={setRequestLineNumbers}
            classNameCodeEditor={styles['query-editor-viewer__code-editor']}
          />
        )}
      </Suspense>
    </div>
  );
};

export default QueryEditorViewer;
