import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { NEXT_MONTH, PREV_MONTH } from '../../actions';
import compose from '../../utils/compose';
import Navigation from '../navigation/Navigation';

const mapStateToProps = state => ({
  date: moment(state.date).format(state.formatMonth),
});

const mapDispatchToProps = { nextDate: NEXT_MONTH, prevDate: PREV_MONTH  };

const WithToolbarForMonth = Wrapped => props => {

  const { history } = props;

  const nextPage = {
    title: 'Schedule вay',
    action: () => history.push('/day')
  };

  const prevPage = {
    title: 'Full year',
    action: () => history.push('/year')
  };
  return <Wrapped {...props} prevPage={prevPage} nextPage={nextPage} />
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  WithToolbarForMonth,
)(Navigation);
