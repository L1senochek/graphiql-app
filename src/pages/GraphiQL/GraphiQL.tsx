import TopSection from '@/components/TopSection/TopSection';
import MiddleSection from '@/components/MiddleSection/MiddleSection';
import styles from './graphi-ql.module.scss';

const GraphiQL: React.FC = (): JSX.Element => {
  return (
    <div className={styles['graphi-ql']}>
      <TopSection />
      <hr className={styles['graphi-ql__separator']} />
      <MiddleSection />
    </div>
  );
};

export default GraphiQL;
