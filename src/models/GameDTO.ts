import { TeamDTO } from './TeamDTO';

export interface GameDTO {
  id: string;
  title: string;
  date: Date;
  playersCount: number;
  team: TeamDTO;
}
