import content from '../../../utils/jsons/content.json';
import { ITeamMember } from '../../../model/components/Welcome/Links/Team/Team';

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

export default teamMembersData;
