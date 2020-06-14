import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { fetchTeam } from '../../redux/teams/teams';
import { TeamDetailsDTO } from '../../models/TeamDetailsDTO';

type ITeamDetailsProps = RouteComponentProps<{ id: string }>

export const TeamDetails = ({ match: { params: { id } } }: ITeamDetailsProps) => {
  const team: TeamDetailsDTO = useSelector((state: any) => state.teams.current);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeam(id));
  }, [dispatch, id]);

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
            <div key={player.id}>{player.name}</div>
          ))}
        </div>
      }
    </div>
  );
};
