import {
  TEAMS_FETCH,
  TEAMS_FETCH_ALL,
} from './teams.actions';

const initState = {
  all: [],
  current: null,
};

export const teams = (state = initState, payload: any): any => {
  switch (payload.type) {
    case TEAMS_FETCH:
      return {
        ...state,
        current: payload.team,
      };
    case TEAMS_FETCH_ALL:
      return {
        ...state,
        all: payload.teams,
      };
    default:
      return state;
  }
};
