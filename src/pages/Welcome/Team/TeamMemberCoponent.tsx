import { FC } from 'react';
import { ITeamMember } from './interface';
import styles from './team.module.scss';

const TeamMemberComponent: FC<ITeamMember> = ({ src, name, description }) => {
  return (
    <div className={styles.card}>
      <img src={src} alt={name} className={styles.img} />
      <h3>{name}</h3>
      <h4>{description}</h4>
    </div>
  );
};

export default TeamMemberComponent;
