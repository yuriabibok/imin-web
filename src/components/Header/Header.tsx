import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: 23,
  },
  title: {
    marginTop: 30,
  },
});

interface IHeaderProps {
  title?: string;
}

export const Header = ({ title }: IHeaderProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/upcoming">
        <Button>Upcoming games</Button>
      </Link>
      <Link to="/teams">
        <Button>Teams</Button>
      </Link>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
    </div>
  );
};
