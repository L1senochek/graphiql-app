import styles from './top-secton.module.scss';

const TopSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles['top-secton']}>
      <h2>GraphiQL</h2>
    </div>
  );
};

export default TopSection;
