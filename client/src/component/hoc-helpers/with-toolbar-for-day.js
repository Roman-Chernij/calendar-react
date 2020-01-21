import React from 'react'
import compose from '../../utils/compose';
import { connect } from 'react-redux';
import Navigation from '../navigation/Navigation';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { NEXT_DAY, PREV_DAY } from '../../actions';

const mapStateToProps = state => ({
  date: moment(state.date).format('ddd [,] MMMM DD [,] YYYY'),
});

const mapDispatchToProps = { nextDate: NEXT_DAY, prevDate: PREV_DAY  };

const WithToolbarForDay = Wrapper => props => {

  const { history } = props;

  const prevPage = {
    title: 'Full month',
    action: () => history.push('/month')
  };

  return <Wrapper {...props} prevPage={prevPage} />
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  WithToolbarForDay
)(Navigation)
