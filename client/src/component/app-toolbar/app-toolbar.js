import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Profile from '../profile/profile';

export const AppToolbar = () => {

  return (
    <AppBar position="static">
      <Toolbar className="align-right">
        <Profile />
      </Toolbar>
    </AppBar>
  )
};
