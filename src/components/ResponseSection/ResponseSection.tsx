import QueryEditorViewer from '@/components/QueryEditorViewer/QueryEditorViewer';
import styles from './response-section.module.scss';
import { useAppSelector } from '@/store/hooks';
import { selectContentGraphiQl } from '@/store/slices/languageSlice';
import { selectClickDocBtn } from '@/store/slices/documentationSlice';

const ResponseSection: React.FC = (): JSX.Element => {
  const isClickDocBtn = useAppSelector(selectClickDocBtn);
  const content = useAppSelector(selectContentGraphiQl);

  return (
    <div
      className={`${styles['response-section']}${
        isClickDocBtn ? ` ${styles['doc-open']}` : ''
      }`}
    >
      <h4 className={styles['response-section__title']}>
        {content.ResponseSectionTitle}
      </h4>
      <QueryEditorViewer viewJson={true} />
    </div>
  );
};

export default ResponseSection;
