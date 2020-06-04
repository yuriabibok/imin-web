import { combineReducers } from 'redux';

import { teams } from './teams/teams.reducer';
import { games } from './games/games.reducer';

export default combineReducers({
  teams,
  games,
});
