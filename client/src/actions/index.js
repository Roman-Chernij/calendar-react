import * as types from '../action-types';

const NEXT_DAY = () => ({type: types.NEXT_DAY});

const PREV_DAY = () => ({type: types.PREV_DAY});

const NEXT_MONTH = () => ({type: types.NEXT_MONTH});

const PREV_MONTH = () => ({type: types.PREV_MONTH});

const NEXT_YEAR = () => ({type: types.NEXT_YEAR});

const PREV_YEAR = () => ({type: types.PREV_YEAR});

export {
  NEXT_DAY,
  PREV_DAY,
  NEXT_MONTH,
  PREV_MONTH,
  NEXT_YEAR,
  PREV_YEAR
}
