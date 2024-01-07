import { useEffect } from 'react';
import TopSection from '@/components/TopSection/TopSection';
import MiddleSection from '@/components/MiddleSection/MiddleSection';
import styles from './graphi-ql.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import useAuthFirebase from '@/utils/auth/useAuthFirebase';
import getSchema from '@/utils/getSchema/getSchema';
import { selectServerAddressInputValue } from '@/store/slices/serverAddressSlice/serverAddressSlice';
import {
  setBtnDocDisabled,
  setDocObj,
} from '@/store/slices/documentationSlice/documentationSlice';

const GraphiQL: React.FC = (): JSX.Element => {
  const endpoint = useAppSelector(selectServerAddressInputValue);
  const dispatch = useAppDispatch();

  useAuthFirebase();

  useEffect(() => {
    (async () => {
      try {
        const res = await getSchema(endpoint);
        dispatch(setBtnDocDisabled(false));
        dispatch(setDocObj(res.data));
      } catch (error) {
        console.error('getSchema Error:', error);
        const errorMessage = String((error as Error).message);
        dispatch(setDocObj(errorMessage));
      }
    })();
  }, [dispatch, endpoint]);

  return (
    <div className={styles['graphi-ql']}>
      <TopSection />
      <hr className={styles['graphi-ql__separator']} />
      <MiddleSection />
    </div>
  );
};

export default GraphiQL;
