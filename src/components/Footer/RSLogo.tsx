import { FC } from 'react';
import RSsvg from '@/assets/svg/rs.svg';

const RSLogo: FC = () => {
  return (
    <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
      <img src={RSsvg} alt="RSlogo" />
    </a>
  );
};

export default RSLogo;
