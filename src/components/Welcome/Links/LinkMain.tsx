import { FC } from 'react';
import { Link } from 'react-router-dom';
import { GRAPHI_QL_PATH } from '@/utils/const/const';
import contentJson from '@/utils/jsons/WelcomeContent/WelcomeContent.json';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const LinkMain: FC = () => {
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);
  const content = isEn ? contentJson.eng : contentJson.ru;
  return (
    <h3>
      {content.link.main.partOne}
      <Link to={GRAPHI_QL_PATH}>{content.link.main.partTwo}</Link>
      {content.link.main.partThree}
    </h3>
  );
};

export default LinkMain;
