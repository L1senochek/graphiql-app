import ServerAddress from '@/components/ServerAddress/ServerAddress';
import Btn from '@/components/Btn/Btn';
import styles from './top-section.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  selectClickDocBtn,
  setClickDocBtn,
} from '@/store/slices/documentationSlice';
import IconDocs from '@/components/IconDocs/IconDocs';
import { selectContentGraphiQl } from '@/store/slices/languageSlice';
import { selectFirebaseUser } from '@/store/slices/firebaseUserSlice';

const TopSection: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isClickDocBtn = useAppSelector(selectClickDocBtn);
  const contentGraphiQl = useAppSelector(selectContentGraphiQl);
  const userName = useAppSelector(selectFirebaseUser);

  return (
    <div className={styles['top-section']}>
      <div className={styles['top-section__left-side']}>
        <Btn
          className={styles['top-section__btn']}
          onClick={() => dispatch(setClickDocBtn(!isClickDocBtn))}
        >
          <IconDocs />
        </Btn>
        <h4>
          {contentGraphiQl.greetings}
          {userName.displayName}!
        </h4>
      </div>
      <h2 className={styles['top-section__title']}>{contentGraphiQl.title}</h2>
      <ServerAddress />
    </div>
  );
};

export default TopSection;
