import { useEffect } from 'react';
import TopSection from '@/components/TopSection/TopSection';
import MiddleSection from '@/components/MiddleSection/MiddleSection';
import styles from './graphi-ql.module.scss';
import { useAppSelector } from '@/store/hooks';
import useAuthFirebase from '@/utils/auth/useAuthFirebase';
import getSchema from '@/utils/getSchema/getSchema';
import { selectServerAddressInputValue } from '@/store/slices/serverAddressSlice';

const GraphiQL: React.FC = (): JSX.Element => {
  const endpoint = useAppSelector(selectServerAddressInputValue);
  useAuthFirebase();

  useEffect(() => {
    (async () => {
      try {
        const res = await getSchema(endpoint);
        console.log('res', res);
      } catch (error) {
        console.error('getSchema Error:', error);
      }
    })();
  }, [endpoint]);

  return (
    <div className={styles['graphi-ql']}>
      <TopSection />
      <hr className={styles['graphi-ql__separator']} />
      <MiddleSection />
    </div>
  );
};

export default GraphiQL;
