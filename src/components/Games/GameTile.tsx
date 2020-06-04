import React from 'react';
import { Link } from 'react-router-dom';

import { GameDTO } from '../../models/GameDTO';

interface IGameTileProps {
  game: GameDTO;
}

export const GameTile = ({ game }: IGameTileProps) => {
  return (
    <Link key={game.id} to={`/games/${game.id}`}>
      <div>
        {game && <div>
          <div>{game.title}</div>
          <div>{game.date}</div>
        </div>}
      </div>
    </Link>
  );
};
