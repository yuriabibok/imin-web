import React from 'react';
import { Card, CardActionArea, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface ITileProps {
  children: any;
  url: string;
}

const useStyles = makeStyles({
  card: {
    marginTop: 3,
    padding: '3px 0',
  },
  cardAction: {
  },
});

export const Tile = ({ children, url }: ITileProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardAction}>
        <Link to={url}>
          {children}
        </Link>
      </CardActionArea>
    </Card>
  );
};
