import React from 'react';
import moment from 'moment';

import { GameDTO } from '../../models/GameDTO';
import { makeStyles, Typography } from '@material-ui/core';
import { Tile } from '../Tile/Tile';

interface IGameTileProps {
  game: GameDTO;
}

const useStyles = makeStyles({
  content: {
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'none',
    padding: 10,
  },
  raw: {
    padding: 0,
  },
});

export const GameTile = ({ game }: IGameTileProps) => {
  const classes = useStyles();

  return (
    <Tile url={`/games/${game.id}`}>
      {
        <div className={classes.content}>
          <Typography className={classes.raw}>{game.title}</Typography>
          <Typography className={classes.raw}>{moment(game.date).format('dddd, d MMMM yyyy, HH:mm')}</Typography>
        </div>
      }
    </Tile>
  );
};
