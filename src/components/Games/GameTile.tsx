import React from 'react';
import moment from 'moment';

import { GameDTO } from '../../models/GameDTO';
import { makeStyles } from '@material-ui/core';
import { Tile } from '../Tile/Tile';

interface IGameTileProps {
  game: GameDTO;
}

const useStyles = makeStyles({
  content: {
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'none',
    padding: 10,
    display: 'flex',
  },
  raw: {
    padding: 0,
  },
  players: {
    marginLeft: 'auto',
    order: 2,
  },
});

export const GameTile = ({ game }: IGameTileProps) => {
  const classes = useStyles();

  return (
    <Tile url={`/games/${game.id}`}>
      {
        <div className={classes.content}>
          <div>
            <div className={classes.raw}>{game.team.name}</div>
            <div className={classes.raw}>{game.title}</div>
            <div className={classes.raw}>
              {moment(game.date).format('LLLL')}
            </div>
          </div>
          <div className={classes.players}>
            <div>{`${game.players.length} / ${game.team.capacity}`}</div>
          </div>
        </div>
      }
    </Tile>
  );
};
