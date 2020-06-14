import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GameDTO } from '../../models/GameDTO';
import { fetchUpcomingGames } from '../../redux/games/games';
import { GameTile } from './GameTile';

export const UpcomingGames = () => {
  const games: GameDTO[] = useSelector((state: any) => state.games.upcoming);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpcomingGames());
  }, [dispatch]);

  return (
    <div className='upcoming'>
      {games.map(game => (
        <GameTile key={game.id} game={game} />
      ))}
    </div>
  );
};
