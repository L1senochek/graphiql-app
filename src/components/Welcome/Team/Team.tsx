import { FC } from 'react';
import styles from './team.module.scss';
import TeamMember from './TeamMember';
import { ITeamMember } from '@/model/components/Welcome/Links/Team/Team';
import { useAppSelector } from '@/store/hooks';
import { selectContentWelcome } from '@/store/slices/languageSlice';

const Team: FC = () => {
  const content = useAppSelector(selectContentWelcome);

  const teamMembersData: ITeamMember[] = [
    {
      name: content.team.timur.name,
      src: content.team.timur.src,
      description: content.team.timur.description,
    },
    {
      name: content.team.tatyana.name,
      src: content.team.tatyana.src,
      description: content.team.tatyana.description,
    },
    {
      name: content.team.dmitrij.name,
      src: content.team.dmitrij.src,
      description: content.team.dmitrij.description,
    },
  ];

  return (
    <div className={styles.team}>
      <h2>{content.title}</h2>
      <div className={styles.members}>
        {teamMembersData.map((teamMember, index) => (
          <TeamMember
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
