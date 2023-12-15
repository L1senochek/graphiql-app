import { FC } from 'react';
import { ITeamMember } from '@/model/components/Welcome/Links/Team/Team';
import styles from './team.module.scss';

const TeamMember: FC<ITeamMember> = ({ src, name, description }) => {
  return (
    <div className={styles.card}>
      <img src={src} alt={name} className={styles.img} />
      <h3 className={styles.name}>{name}</h3>
      <h4>{description}</h4>
    </div>
  );
};

export default TeamMember;
