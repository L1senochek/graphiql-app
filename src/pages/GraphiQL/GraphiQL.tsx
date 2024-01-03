import { useEffect } from 'react';
import TopSection from '@/components/TopSection/TopSection';
import MiddleSection from '@/components/MiddleSection/MiddleSection';
import styles from './graphi-ql.module.scss';
import { useAppDispatch } from '@/store/hooks';
import isAuthFirebase from '@/utils/auth/isAuth';
import getSchema from '@/utils/getSchema/getSchema';

const GraphiQL: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  isAuthFirebase(dispatch);

  const endpoint = 'https://rickandmortyapi.com/graphql';

  useEffect(() => {
    (async () => {
      const res = await getSchema(endpoint);
      console.log('res', res);
    })();
  }, []);

  return (
    <div className={styles['graphi-ql']}>
      <TopSection />
      <hr className={styles['graphi-ql__separator']} />
      <MiddleSection />
    </div>
  );
};

export default GraphiQL;
