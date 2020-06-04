import {
  GAMES_FETCH_UPCOMING,
  GAMES_FETCH,
} from './games.actions';

const initState = {
  upcoming: [],
  current: null,
};

export const games = (state = initState, payload: any): any => {
  switch (payload.type) {
    case GAMES_FETCH_UPCOMING:
      return {
        ...state,
        upcoming: payload.games,
      };
    case GAMES_FETCH:
      return {
        ...state,
        current: payload.game,
      };
    default:
      return state;
  }
};
