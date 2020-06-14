import { TeamDTO } from './TeamDTO';
import { PlayerInGameDTO } from './PlayerDTO';

export interface GameDetailsDTO {
  id: string;
  title: string;
  date: Date;
  playersInGameCount: number;
  team: TeamDTO;
  teamPlayers: PlayerInGameDTO[];
}
