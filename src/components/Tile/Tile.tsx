import React from 'react';
import { Card, CardActionArea, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface ITileProps {
  children: any;
  url: string;
}

const useStyles = makeStyles({
  card: {
    margin: 3,
  },
  cardAction: {
  },
  link: {
    padding: 5,
  },
});

export const Tile = ({ children, url }: ITileProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardAction}>
        <Link to={url} className={classes.link}>
          {children}
        </Link>
      </CardActionArea>
    </Card>
  );
};
