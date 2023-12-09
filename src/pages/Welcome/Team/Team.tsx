import { FC } from 'react';
import styles from './team.module.scss';
import TeamMemberComponent from './TeamMemberCoponent';
import teamMembersData from './teamMembersData';

const Team: FC = () => {
  return (
    <div className={styles.team}>
      <h2>Development team</h2>
      <div className={styles.members}>
        {teamMembersData.map((teamMember, index) => (
          <TeamMemberComponent
            key={index}
            src={teamMember.src}
            name={teamMember.name}
            description={teamMember.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
