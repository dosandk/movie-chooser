import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/counter';

export {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync
};

function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}
