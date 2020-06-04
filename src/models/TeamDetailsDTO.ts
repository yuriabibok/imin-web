import { PlayerDTO } from './PlayerDTO';
import { GameDTO } from './GameDTO';

export interface TeamDetailsDTO {
  id: number;
  name: string;
  capacity: number;
  players: PlayerDTO[];
  games: GameDTO[];
}
