import React from 'react';
import { Link } from 'react-router-dom';
import { Button, makeStyles, Typography } from '@material-ui/core';

import { links } from '../../resources/links';

const useStyles = makeStyles({
  root: {
    margin: 23,
  },
  title: {
    marginTop: 30,
  },
  link: {
    textDecoration: 'none',
  },
});

interface IHeaderProps {
  title?: string;
}

export const Header = ({ title }: IHeaderProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {links.map((link) => (
        <Link key={link.url} className={classes.link} to={link.url}>
          <Button>{link.title}</Button>
        </Link>
      ))}
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
    </div>
  );
};
