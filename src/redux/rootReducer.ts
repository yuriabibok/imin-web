import { combineReducers } from 'redux';

import { upcoming } from './games/games.reducer';

export default combineReducers({
  upcoming,
});
