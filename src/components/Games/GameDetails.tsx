import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import moment from 'moment';
import { Typography, makeStyles } from '@material-ui/core';

import { fetchGame } from '../../redux/games/games';
import { GameDetailsDTO } from '../../models/GameDetailsDTO';

type IGameDetailsProps = RouteComponentProps<{ id: string }>;

const useStyles = makeStyles({
  title: {
    marginTop: 30,
    marginBottom: 10,
  },
  details: {
    marginTop: 40,
  },
  player: {
    display: 'flex',
  },
  image: {
    height: 40,
    marginRight: 10,
  },
  capacity: {
    float: 'right',
  },
});

export const GameDetails = ({
  match: {
    params: { id },
  },
}: IGameDetailsProps) => {
  const game: GameDetailsDTO = useSelector((state: any) => state.games.current);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchGame(id));
  }, [dispatch, id]);

  const image = 'data:image/png;base64,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';

  return (
    <div>
      {game && (
        <div>
          <Typography className={classes.title} variant="h4">
            {game.title}
          </Typography>
          <div>{moment(game.date).format('LLLL')}</div>
          <div>{game.team.name}</div>
          <div className={classes.details}>
            {console.log(game.teamPlayers)}
            {game.teamPlayers.map((player) => (
              <div key={player.id} className={classes.player}>
                <img alt={''} className={classes.image} src={image}></img>
                <div>{player.name}</div>
              </div>
            ))}
          </div>
          <div className={classes.capacity}>{`${game.playersInGameCount} / ${game.team.capacity}`}</div>
        </div>
      )}
    </div>
  );
};
