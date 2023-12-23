import DocumentationExplorer from '@/components/DocumentationExplorer/DocumentationExplorer';
import RequestSection from '@/components/RequestSection/RequestSection';
import ResponseSection from '@/components/ResponseSection/ResponseSection';
import styles from './middle-section.module.scss';

const MiddleSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles['middle-section']}>
      <DocumentationExplorer />
      <RequestSection />
      <ResponseSection />
    </div>
  );
};

export default MiddleSection;
