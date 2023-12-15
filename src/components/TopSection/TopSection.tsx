import HeadersEditor from '@/components/HeadersEditor/HeadersEditor';
import styles from './top-secton.module.scss';

const TopSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles['top-secton']}>
      <HeadersEditor />
      <h2 className={styles['top-secton__title']}>GraphiQL</h2>
      <div></div>
    </div>
  );
};

export default TopSection;
