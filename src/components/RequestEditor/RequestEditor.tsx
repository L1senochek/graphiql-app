import styles from './request-editor.module.scss';

const RequestEditor: React.FC = (): JSX.Element => {
  return (
    <div className={styles['request-editor']}>
      <span>RequestEditor</span>
      <textarea />
    </div>
  );
};

export default RequestEditor;
