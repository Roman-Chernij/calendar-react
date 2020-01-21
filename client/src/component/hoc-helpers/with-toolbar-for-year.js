import React from 'react';
import compose from '../../utils/compose';
import Navigation from '../navigation/Navigation';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { PREV_YEAR, NEXT_YEAR } from '../../actions';

const mapStateToProps = state => ({
  date: moment(state.date).format('YYYY'),
});

const mapDispatchToProps = { nextDate: NEXT_YEAR, prevDate: PREV_YEAR  };

const WithToolbarForYear = Wrapped => props => {

  const { history } = props;

  const nextPage = {
    title: 'Full month',
    action: () => history.push('/month')
  };

  return <Wrapped {...props} nextPage={nextPage} />
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  WithToolbarForYear
)(Navigation)
