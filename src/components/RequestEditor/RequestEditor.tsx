import IconRun from '@/components/IconRun/IconRun';
import Btn from '@/components/Btn/Btn';
import IconBroom from '@/components/IconBroom/IconBroom';
import styles from './request-editor.module.scss';
import QueryEditorViewer from '@/components/QueryEditorViewer/QueryEditorViewer';
import { selectContentGraphiQl } from '@/store/slices/languageSlice';
import { useAppSelector } from '@/store/hooks';

const RequestEditor: React.FC = (): JSX.Element => {
  const content = useAppSelector(selectContentGraphiQl);

  return (
    <div className={styles['request-editor']}>
      <div className={styles['request-editor__left-side']}>
        <h4 className={styles['request-editor__left-side_title']}>
          {content.RequestEditorTitle}
        </h4>
        <QueryEditorViewer />
      </div>
      <div className={styles['request-editor__right-side']}>
        <Btn className={styles['request-editor__right-side_btn']} title="run">
          <IconRun />
        </Btn>
        <Btn
          className={`${styles['request-editor__right-side_btn']} ${styles['icon-broom']}`}
          title="prettify"
        >
          <IconBroom />
        </Btn>
      </div>
    </div>
  );
};

export default RequestEditor;
