import {
  fetchTeam as fetchTeamAction,
  fetchTeams as fetchTeamsAction,
} from './teams.actions';
import api from '../../services/api';

export const fetchTeams = () => async (dispatch: any) => {
  const teams = await api.teams.all();
  dispatch(fetchTeamsAction(teams));
};

export const fetchTeam = (id: string) => async (dispatch: any) => {
  const team = await api.teams.get(id);
  dispatch(fetchTeamAction(team));
};
