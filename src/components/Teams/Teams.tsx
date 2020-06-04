import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TeamDTO } from '../../models/TeamDTO';
import { fetchTeams } from '../../redux/teams/teams';
import { TeamTile } from './TeamTile';

export const Teams = () => {
  const teams: TeamDTO[] = useSelector((state: any) => state.teams.all);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeams());
  });

  return (
    <div>
      {teams.map(team => (
        <TeamTile key={team.id} team={team} />
      ))}
    </div>
  );
};
