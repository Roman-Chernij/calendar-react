import React from 'react';
import { connect } from 'react-redux';
import { ProfileServiceConsumer } from '../../../../../component/hoc-helpers';
import { Loader } from '../../../../../component/loader/loader';
import { compose } from '../../../../../utils'
import { SET_PROFILE } from '../../../../../action-types';
import { getActionsByType } from '../../../../../actions';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';

import SettingDisplayingTime from './setting-displaying-time/setting-displaying-time';

const AccountBody = props => {
  const { user } = props;
  if (!user) {
    return <Loader />
  }
  return (
    <div className="account-content">

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img className="account-content-user-img" src={user.picture || ''} alt=""/>
        </Grid>
        <Grid item >
          <List>
            <ListItem>
              <ListItemAvatar>
                <PersonIcon color="primary" style={{ fontSize: 30 }} />
              </ListItemAvatar>
              <ListItemText primary={user.name} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <EmailIcon color="primary" style={{ fontSize: 30 }} />
              </ListItemAvatar>
              <ListItemText primary={user.email} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Typography variant="h2" align="center" color="primary">
        h1. Heading
      </Typography>
s      <SettingDisplayingTime />
    </div>
  )
};

const mapMethodToProps = service => ({
  updateProfile: service.updateProfile,
  removeProfile: service.removeProfile
});

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  [SET_PROFILE]: getActionsByType(SET_PROFILE)
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  ProfileServiceConsumer(mapMethodToProps)
)(AccountBody);

