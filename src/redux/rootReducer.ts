import { combineReducers } from 'redux';

import { upcoming, game } from './games/games.reducer';

export default combineReducers({
  upcoming,
  game,
});
