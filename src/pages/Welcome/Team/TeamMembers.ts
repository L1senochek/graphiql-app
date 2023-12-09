import content from '../content.json';
import { ITeamMember } from './interface';

const teamMembers: ITeamMember[] = [
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

export default teamMembers;
