import styles from './middle-section.module.scss';

const MiddleSection: React.FC = (): JSX.Element => {
  return (
    <div className={styles['middle-section']}>
      <div>
        <textarea />
      </div>
      <div>
        <textarea />
      </div>
      <div>
        <textarea />
      </div>
    </div>
  );
};

export default MiddleSection;
