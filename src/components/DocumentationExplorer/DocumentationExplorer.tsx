import { useAppSelector } from '@/store/hooks';
import styles from './documentation-explorer.module.scss';
import { RootState } from '@/store/store';

const DocumentationExplorer: React.FC = (): JSX.Element => {
  const isClickDocBtn = useAppSelector(
    (state: RootState) => state.documentationSlice.clickDocBtn
  );
  return (
    <div
      className={`${styles['documentation-explorer']}${
        isClickDocBtn ? ` ${styles['open']}` : ''
      }`}
    >
      DocumentationExplorer
    </div>
  );
};

export default DocumentationExplorer;
