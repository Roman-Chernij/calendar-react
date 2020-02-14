import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { trimForString } from '../../../../../../utils'
import Button from '@material-ui/core/Button';

const SettingDisplayingTime = ({ time }) => {

  const getTargetField = (field) => {
    if (!time) {
      return ''
    }
    if (trimForString(field) && !time[field]) {
      return '';
    }

    return time[field];
  };
  const defaultTime = '2020-01-01T17:09:00+02:00';

  const [hour, setFormatHour] = useState(getTargetField('hour'));
  const [minute, setFormatMinute] = useState(getTargetField('minute'));
  const [periodOfDay, setPeriodOfDay] = useState(getTargetField('periodOfDay'));

  const handleChangeFormatHour = event => {
    setFormatHour(event.target.value);
  };

  const handleChangeFormatMinute = event => {
    setFormatMinute(event.target.value);
  };

  const handlePeriodOfDay = event => {
    setPeriodOfDay(event.target.value);
  };

  const canSaveChanges = () => {
    const isChangeHour = getTargetField('hour') === hour;
    const isChangeMinute = getTargetField('minute') === minute;
    const isChangePeriodOfDay = getTargetField('periodOfDay') === periodOfDay;

    return isChangeHour && isChangeMinute && isChangePeriodOfDay
  };

  if (!time) {
    return null
  }

  return (
    <>
      <Typography variant="h3" align="center" color="primary">
        Displaying time
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Hour</FormLabel>
                <RadioGroup aria-label="gender" name="Hour" value={hour} onChange={handleChangeFormatHour}>
                  <FormControlLabel value="H" control={<Radio />} label="0 1 ... 22 23" />
                  <FormControlLabel value="HH" control={<Radio />} label="00 01 ... 22 23" />
                  <FormControlLabel value="hh" control={<Radio />} label="01 02 ... 11 12" />
                  <FormControlLabel value="h" control={<Radio />} label="1 2 ... 23 24" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Minute</FormLabel>
                <RadioGroup aria-label="gender" name="Minute" value={minute} onChange={handleChangeFormatMinute}>
                  <FormControlLabel value="m" control={<Radio />} label="0 1 ... 58 59" />
                  <FormControlLabel value="mm" control={<Radio />} label="00 01 ... 58 59" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl component="fieldset">
                <FormLabel component="legend">AM/PM</FormLabel>
                <RadioGroup aria-label="gender" name="Minute" value={periodOfDay} onChange={handlePeriodOfDay}>
                  <FormControlLabel value="A" control={<Radio />} label="AM PM" />
                  <FormControlLabel value="a" control={<Radio />} label="am pm" />
                  <FormControlLabel value="" control={<Radio />} label="not display" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <span className="account-content-example-time">{moment(defaultTime).format(`${hour}:${minute} ${periodOfDay}`)}</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Button disabled={canSaveChanges()} variant="contained" color="primary">
          Save displaying time
        </Button>
      </Grid>
    </>
  )
};

const mapStateToProps = ({ user }) => {
  let result = [];
  if (user && user.displaying && user.displaying.time) {
    result = {
      time: user.displaying.time
    };
  }
  return result
};

export default connect(mapStateToProps)(SettingDisplayingTime);
