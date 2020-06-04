import { getJson } from './fetch';
import endpoints from './endpoints';
import { TeamDTO } from '../../models/TeamDTO';
import { TeamDetailsDTO } from '../../models/TeamDetailsDTO';

export default {
  games: {
    upcoming: async () => getJson(endpoints.games.upcoming),
    get: async (id: string) => getJson(endpoints.games.get(id)),
  },
  teams: {
    all: async (): Promise<TeamDTO[]> => getJson(endpoints.teams.all),
    get: async (id: string): Promise<TeamDetailsDTO> => getJson(endpoints.teams.get(id)),
  },
};
