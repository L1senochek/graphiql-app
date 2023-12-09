import styles from './team.module.scss';
import TeamMemberComponent from './TeamMemberCoponent';
import teamMembers from './TeamMembers';

const Team = () => {
  return (
    <div className={styles.team}>
      <h2>Development team</h2>
      <div className={styles.members}>
        {teamMembers.map((member, index) => (
          <TeamMemberComponent
            key={index}
            src={member.src}
            name={member.name}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
