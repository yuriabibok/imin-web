import {
  GAMES_FETCH_UPCOMING, GAMES_FETCH,
} from './games.actions';

const initUpcomingState = {
  items: [],
};

export const upcoming = (state = initUpcomingState, payload: any): any => {
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

const initGameState = {
  game: {},
};

export const game = (state = initGameState, payload: any): any => {
  switch (payload.type) {
    case GAMES_FETCH:
      return {
        ...state,
        game: payload.game,
      };
    default:
      return state;
  }
};
