import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  extendedIcon: {
    fontSize: '4rem'
  },
}));

const AccountHeader = ({history}) => {
  const classes = useStyles();
  const jumpToHomePage = () => history.push('/month');

  return (
    <div className="account-header">
      <Button color="primary" onClick={jumpToHomePage}>
        <ChevronLeftIcon className={classes.extendedIcon} fontSize="inherit"/>
        Home page
      </Button>
    </div>
  )
};

export default withRouter(AccountHeader)
