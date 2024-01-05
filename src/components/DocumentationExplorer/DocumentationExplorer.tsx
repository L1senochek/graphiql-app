import { Suspense, lazy, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import styles from './documentation-explorer.module.scss';
import { selectContentGraphiQl } from '@/store/slices/languageSlice';
import {
  selectClickDocBtn,
  selectDocLoading,
  selectDocObj,
  setBtnDocDisabled,
  setClickDocBtn,
  setDocLoading,
} from '@/store/slices/documentationSlice';
import {
  IDocsType,
  ISchemaType,
} from '@/model/components/DocumentationExplorer/DocumentationExplorer';
import Loading from '@/components/Loading/Loading';
import ErrorModal from '@/components/ErrorModal/ErrorModal';

const LazySchemaType = lazy(() => import('@/components/SchemaType/SchemaType'));

const DocumentationExplorer: React.FC = (): JSX.Element => {
  const isClickDocBtn = useAppSelector(selectClickDocBtn);
  const content = useAppSelector(selectContentGraphiQl);
  const docs = useAppSelector(selectDocObj);
  const isDocsLoading = useAppSelector(selectDocLoading);
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    dispatch(setDocLoading(false));
  }, [dispatch, docs]);

  useEffect(() => {
    if (typeof docs === 'string') {
      setError(docs);
      dispatch(setClickDocBtn(false));
      dispatch(setBtnDocDisabled(true));
    }
  }, [dispatch, docs]);

  const renderSchemaType = (type: ISchemaType) => (
    <LazySchemaType key={type.name} type={type} />
  );

  const renderSchemaTypes = (types: ISchemaType[]) => (
    <Suspense fallback={<Loading />}>{types.map(renderSchemaType)}</Suspense>
  );

  const closeModal = (): void => setError(null);

  return (
    <div
      className={`${styles['documentation-explorer']}${
        isClickDocBtn ? ` ${styles['open']}` : ''
      }`}
    >
      <h4 className={styles['documentation-explorer__title']}>
        {content.DocumentationExplorerTitle}
      </h4>
      {isDocsLoading ? (
        <Loading />
      ) : (
        <>
          {typeof docs === 'string' && (
            <div className={styles['documentation-explorer__docs']}>{docs}</div>
          )}
          {error && <ErrorModal errorMessage={error} onClose={closeModal} />}
          {docs && typeof docs === 'object' && (
            <div className={styles['documentation-explorer__content']}>
              {renderSchemaTypes((docs as IDocsType).__schema?.types)}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DocumentationExplorer;
