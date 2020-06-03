import { getJson } from './fetch';
import endpoints from './endpoints';

export default {
  games: {
    upcoming: async () => getJson(endpoints.games.upcoming),
    get: async (id: string) => getJson(endpoints.games.get(id)),
  },
};
