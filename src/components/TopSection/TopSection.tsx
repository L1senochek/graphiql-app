import HeadersEditor from '@/components/HeadersEditor/HeadersEditor';
import Btn from '@/components/Btn/Btn';
import styles from './top-section.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { setClickDocBtn } from '@/store/slices/documentationSlice';
import IconDocs from '@/components/IconDocs/IconDocs';

const TopSection: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isClickDocBtn = useAppSelector(
    (state: RootState) => state.documentationSlice.clickDocBtn
  );
  return (
    <div className={styles['top-section']}>
      <div className={styles['top-section__left-side']}>
        <Btn
          className={styles['top-section__btn']}
          onClick={() => dispatch(setClickDocBtn(!isClickDocBtn))}
        >
          <IconDocs />
        </Btn>
        <h4>Hello, User!</h4>
      </div>
      <h2 className={styles['top-section__title']}>GraphiQL</h2>
      <HeadersEditor />
    </div>
  );
};

export default TopSection;
