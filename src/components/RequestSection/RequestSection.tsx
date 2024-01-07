import RequestEditor from '@/components/RequestEditor/RequestEditor';
import VariablesEditor from '@/components/VariablesEditor/VariablesEditor';
import styles from './request-section.module.scss';

const RequestSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles['request-section']}>
      <RequestEditor />
      <VariablesEditor />
    </div>
  );
};

export default RequestSection;
