import { GameDTO } from './GameDTO';
import { PlayerInGameDTO } from './PlayerDTO';

export interface TeamDetailsDTO {
  id: string;
  name: string;
  capacity: number;
  players: PlayerInGameDTO[];
  games: GameDTO[];
}
