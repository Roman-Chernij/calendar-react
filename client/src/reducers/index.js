import * as types from '../action-types';
import moment from 'moment';

const initialState = {
  date: moment().format(),
  formatDate: 'dddd DD',
  formatMonth: 'MMMM [,] YYYY',
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case types.NEXT_DAY:
      return {
        ...state,
        date: moment(state.date).add(1, 'day').format(),
      };
    case types.PREV_DAY:
      return {
        ...state,
        date: moment(state.date).add(-1, 'day').format(),
      };
    case types.NEXT_MONTH:
      return {
        ...state,
        date: moment(state.date).add(1, 'months').format(),
      };
    case types.PREV_MONTH:
      return {
        ...state,
        date: moment(state.date).add(-1, 'months').format(),
      };
    case types.NEXT_YEAR:
      return {
        ...state,
        date: moment(state.date).add(1, 'year').format(),
      };
    case types.PREV_YEAR:
      return {
        ...state,
        date: moment(state.date).add(-1, 'year').format(),
      };
    default:
      return state
  }
};

export default reducer;
