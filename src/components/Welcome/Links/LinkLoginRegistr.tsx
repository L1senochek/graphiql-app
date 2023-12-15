import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN_PATH } from '@/utils/const/const';
import { SIGN_UP_PATH } from '@/utils/const/const';
import contentJson from '@/utils/jsons/WelcomeContent/WelcomeContent.json';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const LinkLoginRegistr: FC = () => {
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);
  const content = isEn ? contentJson.eng : contentJson.ru;
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
