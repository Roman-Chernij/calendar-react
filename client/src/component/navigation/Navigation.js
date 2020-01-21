import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './toolbar.scss';

const useStyles = makeStyles(theme => ({
  extendedIcon: {
    fontSize: '4rem'
  },
}));

const Navigation = props => {
  const classes = useStyles();
  const {
    date,
    nextPage,
    prevPage,
    nextDate,
    prevDate } = props;

  return (
    <div className="navigation">
      <div className="navigation-col align-left">
        {
          prevPage &&
          <Button color="primary" onClick={prevPage.action}>
            <ChevronLeftIcon className={classes.extendedIcon} fontSize="inherit"/>
            { prevPage.title }
          </Button>
        }
      </div>
      <div className="navigation-content navigation-col align-center">
        {
          prevDate &&
          <IconButton
            color="primary"
            aria-label="delete"
            className={classes.extendedIcon}
            size="small"
            onClick={prevDate}>
            <ChevronLeftIcon fontSize="inherit"/>
          </IconButton>
        }

        <span className="navigation__date">{date}</span>
        {
          nextDate &&
          <IconButton
            color="primary"
            aria-label="delete"
            className={classes.extendedIcon}
            size="small"
            onClick={nextDate}>
            <ChevronRightIcon fontSize="inherit"/>
          </IconButton>
        }
      </div>
      <div className="navigation-col align-right">
        {
          nextPage &&
          <Button color="primary" onClick={nextPage.action}>
            { nextPage.title }
            <ChevronRightIcon className={classes.extendedIcon} fontSize="inherit"/>
          </Button>
        }
      </div>
    </div>
  )
};

export default Navigation

