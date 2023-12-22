import QueryEditorViewer from '@/components/QueryEditorViewer/QueryEditorViewer';
import styles from './response-section.module.scss';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const ResponseSection: React.FC = (): JSX.Element => {
  const isClickDocBtn = useAppSelector(
    (state: RootState) => state.documentationSlice.clickDocBtn
  );
  return (
    <div
      className={`${styles['response-section']}${
        isClickDocBtn ? ` ${styles['doc-open']}` : ''
      }`}
    >
      <h4 className={styles['response-section__title']}>ResponseSection</h4>
      <QueryEditorViewer viewJson={true} />
    </div>
  );
};

export default ResponseSection;
