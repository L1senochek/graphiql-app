import IconRun from '@/components/IconRun/IconRun';
import Btn from '@/components/Btn/Btn';
import IconBroom from '@/components/IconBroom/IconBroom';
import styles from './request-editor.module.scss';
import QueryEditorViewer from '@/components/QueryEditorViewer/QueryEditorViewer';

const RequestEditor: React.FC = (): JSX.Element => {
  return (
    <div className={styles['request-editor']}>
      <div className={styles['request-editor__left-side']}>
        <h4>RequestEditor</h4>
        <QueryEditorViewer />
      </div>
      <div className={styles['request-editor__right-side']}>
        <Btn className={styles['request-editor__right-side_btn']}>
          <IconRun />
        </Btn>
        <Btn
          className={`${styles['request-editor__right-side_btn']} ${styles['icon-broom']}`}
        >
          <IconBroom />
        </Btn>
      </div>
    </div>
  );
};

export default RequestEditor;
