import { combineReducers } from 'redux';

import { upcoming, game } from './games/games.reducer';
import { teams } from './teams/teams.reducer';

export default combineReducers({
  upcoming,
  game,
  teams,
});
