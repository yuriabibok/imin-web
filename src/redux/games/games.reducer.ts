import {
  GAMES_FETCH_UPCOMING,
} from './games.actions';

const initState = {
  items: [],
};

export const upcoming = (state = initState, payload: any): any => {
  switch (payload.type) {
    case GAMES_FETCH_UPCOMING:
      return {
        ...state,
        items: payload.games,
      };
    default:
      return state;
  }
};
