import { FC } from 'react';
import { ITeamMember } from './interface';
import styles from './team.module.scss';

const TeamMemberComponent: FC<ITeamMember> = ({ src, name, description }) => {
  return (
    <div>
      <img src={src} alt={name} className={styles.img} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TeamMemberComponent;
