import { PlayerDTO } from './PlayerDTO';
import { TeamDTO } from './TeamDTO';

export interface GameDTO {
  id: number;
  title: string;
  date: Date;
  players: PlayerDTO[];
  team: TeamDTO;
}
