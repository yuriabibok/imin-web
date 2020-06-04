import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTeam } from '../../redux/teams/teams';
import { TeamDetailsDTO } from '../../models/TeamDetailsDTO';
import { RouteComponentProps } from 'react-router-dom';

type ITeamDetailsProps = RouteComponentProps<{ id: string }>

export const TeamsDetails = ({ match: { params: { id } } }: ITeamDetailsProps) => {
  const team: TeamDetailsDTO = useSelector((state: any) => state.teams.current);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeam(id));
  });

  return (
    <div>
      {team &&
        <div>
          <div>{team.name}</div>
          <div>{team.capacity}</div>
          {team.games.map(game => (
            <div key={game.id}>{game.title}</div>
          ))}
          {team.players.map(player => (
            <div key={player.id}>{player.firstName}</div>
          ))}
        </div>
      }
    </div>
  );
};
