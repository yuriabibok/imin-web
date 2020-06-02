import { GameDTO } from '../../models/GameDTO';

export const GAMES_FETCH_UPCOMING = 'GAMES_FETCH_UPCOMING';

export const fetchUpcomingGames = (games: GameDTO[]): any => ({
  type: GAMES_FETCH_UPCOMING,
  games,
});
