import { TeamDTO } from '../../models/TeamDTO';
import { TeamDetailsDTO } from '../../models/TeamDetailsDTO';

export const TEAMS_FETCH_ALL = 'TEAMS_FETCH_ALL';
export const TEAMS_FETCH = 'TEAMS_FETCH';

export const fetchTeams = (teams: TeamDTO[]): any => ({
  type: TEAMS_FETCH_ALL,
  teams,
});

export const fetchTeam = (team: TeamDetailsDTO): any => ({
  type: TEAMS_FETCH,
  team,
});
