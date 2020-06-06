import React from 'react';
import { Link } from 'react-router-dom';

import { GameDTO } from '../../models/GameDTO';
import { Card } from '@material-ui/core';

interface IGameTileProps {
  game: GameDTO;
}

export const GameTile = ({ game }: IGameTileProps) => {
  return (
    <Link key={game.id} to={`/games/${game.id}`}>
      <Card>
        {game && <div>
          <div>{game.title}</div>
          <div>{game.date}</div>
        </div>}
      </Card>
    </Link>
  );
};
