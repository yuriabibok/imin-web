import {
  fetchUpcomingGames as fetchUpcomingGamesAction,
} from './games.actions';
import api from '../../services/api';

export const fetchUpcomingGames = () => async (dispatch: any) => {
  const games = await api.games.upcoming();
  dispatch(fetchUpcomingGamesAction(games));
};
