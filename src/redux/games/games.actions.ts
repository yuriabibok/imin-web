import { GameDTO } from '../../models/GameDTO';

export const GAMES_FETCH_UPCOMING = 'GAMES_FETCH_UPCOMING';
export const GAMES_FETCH = 'GAMES_FETCH';

export const fetchUpcomingGames = (games: GameDTO[]): any => ({
  type: GAMES_FETCH_UPCOMING,
  games,
});

export const fetchGame = (game: GameDTO): any => ({
  type: GAMES_FETCH,
  game,
});
