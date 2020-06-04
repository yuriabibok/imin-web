import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { GameDTO } from '../../models/GameDTO';
import { fetchGame } from '../../redux/games/games';

type IGameDetailsProps = RouteComponentProps<{ id: string }>

export const GameDetails = ({ match: { params: { id } } }: IGameDetailsProps) => {
  const game: GameDTO = useSelector((state: any) => state.games.current);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGame(id));
  });

  return (
    <div>
      {game &&
        <div>
          <div>{game.title}</div>
          <div>{game.date}</div>
          {game.players.map(player => (
            <div key={player.id}>{player.firstName}</div>
          ))}
          {game.team.name}
        </div>
      }
    </div>
  );
};
