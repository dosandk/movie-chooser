import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/counter';

export default {
  [INCREMENT_COUNTER]: (state = 0) => state + 1,
  [DECREMENT_COUNTER]: (state = 0) => state - 1
};
