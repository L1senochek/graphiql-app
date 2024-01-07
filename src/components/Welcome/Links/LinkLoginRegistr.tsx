import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN_PATH } from '@/utils/const/const';
import { SIGN_UP_PATH } from '@/utils/const/const';
import { useAppSelector } from '@/store/hooks';
import { selectContentWelcome } from '@/store/slices/languageSlice/languageSlice';

const LinkLoginRegistr: FC = () => {
  const content = useAppSelector(selectContentWelcome);
  return (
    <h3>
      {content.link.loginRegistr.partOne}
      <Link to={SIGN_IN_PATH}>{content.link.loginRegistr.partTwo}</Link>
      {content.link.loginRegistr.partThree}
      <Link to={SIGN_UP_PATH}>{content.link.loginRegistr.partFour}</Link>
      {content.link.loginRegistr.partFive}
    </h3>
  );
};

export default LinkLoginRegistr;
