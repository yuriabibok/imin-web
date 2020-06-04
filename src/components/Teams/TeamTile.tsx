import React from 'react';

import { TeamDTO } from '../../models/TeamDTO';
import { Link } from 'react-router-dom';

interface ITeamTileProps {
  team: TeamDTO;
}

export const TeamTile = ({ team }: ITeamTileProps) => {
  return (
    <Link key={team.id} to={`/teams/${team.id}`}>
      <div>
        {team && <div>
          <div>{team.name}</div>
          <div>{team.capacity}</div>
        </div>}
      </div>
    </Link>
  );
};
