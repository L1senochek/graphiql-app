import { FC } from 'react';
import styles from './team.module.scss';
import TeamMember from './TeamMember';
import { ITeamMember } from '@/model/components/Welcome/Links/Team/Team';
import contentJson from '@/utils/jsons/WelcomeContent/WelcomeContent.json';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const Team: FC = () => {
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);
  const content = isEn ? contentJson.eng : contentJson.ru;

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
