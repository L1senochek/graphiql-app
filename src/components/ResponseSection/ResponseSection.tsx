import QueryEditorViewer from '@/components/QueryEditorViewer/QueryEditorViewer';
import styles from './response-section.module.scss';

const ResponseSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles['response-section']}>
      <h4 className={styles['response-section__title']}>ResponseSection</h4>
      <QueryEditorViewer viewJson={true} />
    </div>
  );
};

export default ResponseSection;
