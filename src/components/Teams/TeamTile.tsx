import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { TeamDTO } from '../../models/TeamDTO';
import { Tile } from '../Tile/Tile';

interface ITeamTileProps {
  team: TeamDTO;
}

const useStyles = makeStyles({
  content: {
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'none',
    padding: 10,
  },
  teamName: {
    padding: 0,
  },
});

export const TeamTile = ({ team }: ITeamTileProps) => {
  const classes = useStyles();

  return (
    <Tile url={`/teams/${team.id}`}>
      {
        <div className={classes.content}>
          <Typography className={classes.teamName}>{team.name}</Typography>
        </div>
      }
    </Tile>
  );
};
