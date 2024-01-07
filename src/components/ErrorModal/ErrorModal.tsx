import IErrorModal from '@/model/components/ErrorModal/ErrorModal';
import { useAppSelector } from '@/store/hooks';
import { selectContentErrorModal } from '@/store/slices/languageSlice/languageSlice';
import Btn from '@/components/Btn/Btn';
import styles from './error-modal.module.scss';

const ErrorModal: React.FC<IErrorModal> = ({
  errorMessage,
  onClose,
}): JSX.Element => {
  const content = useAppSelector(selectContentErrorModal);
  return (
    <div className={styles['error-modal']}>
      <div className={styles['error-modal__wrapper']}>
        <div className={styles['error-modal__btn_wrapper']}>
          <Btn className={styles['error-modal__btn']} onClick={onClose}>
            x
          </Btn>
        </div>
        <h2 className={styles['error-modal__title']}>{content.title}</h2>
        <h3 className={styles['error-modal__message']}>{errorMessage}</h3>
      </div>
    </div>
  );
};

export default ErrorModal;
