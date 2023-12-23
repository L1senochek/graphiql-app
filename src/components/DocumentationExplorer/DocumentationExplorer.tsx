import { useAppSelector } from '@/store/hooks';
import styles from './documentation-explorer.module.scss';
import { selectContentGraphiQl } from '@/store/slices/languageSlice';
import { selectClickDocBtn } from '@/store/slices/documentationSlice';

const DocumentationExplorer: React.FC = (): JSX.Element => {
  const isClickDocBtn = useAppSelector(selectClickDocBtn);
  const content = useAppSelector(selectContentGraphiQl);

  return (
    <div
      className={`${styles['documentation-explorer']}${
        isClickDocBtn ? ` ${styles['open']}` : ''
      }`}
    >
      <h4 className={styles['documentation-explorer__title']}>
        {content.DocumentationExplorerTitle}
      </h4>
    </div>
  );
};

export default DocumentationExplorer;
