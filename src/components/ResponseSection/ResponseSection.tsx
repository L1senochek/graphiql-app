import styles from './response-section.module.scss';
import resJson from './resTest.json';

const ResponseSection: React.FC = (): JSX.Element => {
  const formattedJson = JSON.stringify(resJson, null, 8);

  return (
    <div className={styles['response-section']}>
      <>ResponseSection</>
      <pre className={styles['response-section__pre']}>{formattedJson}</pre>
    </div>
  );
};

export default ResponseSection;
