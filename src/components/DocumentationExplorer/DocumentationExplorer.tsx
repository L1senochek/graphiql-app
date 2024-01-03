import { useAppSelector } from '@/store/hooks';
import styles from './documentation-explorer.module.scss';
import { selectContentGraphiQl } from '@/store/slices/languageSlice';
import {
  selectClickDocBtn,
  selectDocObj,
} from '@/store/slices/documentationSlice';

const DocumentationExplorer: React.FC = (): JSX.Element => {
  const isClickDocBtn = useAppSelector(selectClickDocBtn);
  const content = useAppSelector(selectContentGraphiQl);
  const docs = useAppSelector(selectDocObj);

  return (
    <div
      className={`${styles['documentation-explorer']}${
        isClickDocBtn ? ` ${styles['open']}` : ''
      }`}
    >
      <h4 className={styles['documentation-explorer__title']}>
        {content.DocumentationExplorerTitle}
      </h4>
      {typeof docs === 'string' && (
        <div className={styles['documentation-explorer__docs']}>{docs}</div>
      )}
    </div>
  );
};

export default DocumentationExplorer;
