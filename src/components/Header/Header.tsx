import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: 23,
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to='/upcoming'>
        <Button>Upcoming games</Button>
      </Link>
      <Link to='/teams'>
        <Button>Teams</Button>
      </Link>
    </div>
  );
};
