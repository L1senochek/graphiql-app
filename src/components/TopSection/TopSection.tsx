import HeadersEditor from '@/components/HeadersEditor/HeadersEditor';
import Btn from '@/components/Btn/Btn';
import styles from './top-secton.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { setClickDocBtn } from '@/store/slices/documentationSlice';

const TopSection: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isClickDocBtn = useAppSelector(
    (state: RootState) => state.documentationSlice.clickDocBtn
  );
  return (
    <div className={styles['top-secton']}>
      <Btn onClick={() => dispatch(setClickDocBtn(!isClickDocBtn))}>Doc</Btn>
      <h2 className={styles['top-secton__title']}>GraphiQL</h2>
      <HeadersEditor />
    </div>
  );
};

export default TopSection;
