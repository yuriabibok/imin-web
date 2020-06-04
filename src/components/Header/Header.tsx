import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


export const Header = () => {
  return (
    <div>
      <Link to='/upcoming'>
        <Button>Upcoming games</Button>
      </Link>
      <Link to='/teams'>
        <Button>Teams</Button>
      </Link>
    </div>
  );
};
