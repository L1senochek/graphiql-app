import { FC } from 'react';
import { Link } from 'react-router-dom';
import { GRAPHI_QL_PATH } from '@/utils/const/const';
import { useAppSelector } from '@/store/hooks';
import { selectContentWelcome } from '@/store/slices/languageSlice';

const LinkMain: FC = () => {
  const content = useAppSelector(selectContentWelcome);
  return (
    <h3>
      {content.link.main.partOne}
      <Link to={GRAPHI_QL_PATH}>{content.link.main.partTwo}</Link>
      {content.link.main.partThree}
    </h3>
  );
};

export default LinkMain;
