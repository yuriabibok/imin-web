import {
  fetchGame as fetchGameAction,
  fetchUpcomingGames as fetchUpcomingGamesAction,
} from './games.actions';
import api from '../../services/api';

export const fetchUpcomingGames = () => async (dispatch: any) => {
  const games = await api.games.upcoming();
  dispatch(fetchUpcomingGamesAction(games));
};

export const fetchGame = (id: string) => async (dispatch: any) => {
  const game = await api.games.get(id);
  dispatch(fetchGameAction(game));
};
