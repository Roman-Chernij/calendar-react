import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import { compose } from '../../utils';
import { AuthServiceConsumer } from '../hoc-helpers';

const Profile = ({ history, logout }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const jumpToAccountPage = () => {
    handleClose();
    history.push('/account')
  };

  const logOut = () => {
    handleClose();
    logout();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        color="secondary"
        aria-label="profile"
        size="medium">
        <AccountCircleIcon fontSize="large"/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={jumpToAccountPage}>
          <ListItemIcon>
            <PermContactCalendarRoundedIcon fontSize="large"/>
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Profile
          </Typography>
        </MenuItem>
        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <ExitToAppRoundedIcon fontSize="large"/>
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </>
  )
};

const mapMethodToProps = service => ({
  logout: service.logout
});

export default compose(withRouter, AuthServiceConsumer(mapMethodToProps))(Profile);
