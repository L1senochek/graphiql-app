import DocumentationExplorer from '@/components/DocumentationExplorer/DocumentationExplorer';
import RequestEditor from '@/components/RequestEditor/RequestEditor';
import VariablesEditor from '@/components/VariablesEditor/VariablesEditor';
import ResponseSection from '@/components/ResponseSection/ResponseSection';
import styles from './middle-section.module.scss';

const MiddleSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles['middle-section']}>
      <DocumentationExplorer />
      <div className={styles['middle-section__item']}>
        <RequestEditor />
        <VariablesEditor />
      </div>
      <ResponseSection />
    </div>
  );
};

export default MiddleSection;
