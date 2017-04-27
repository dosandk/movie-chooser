import React from 'react';

const Counter = ({ increment, incrementIfOdd, decrement, counter, showLoader, hideLoader, showTemporary }) => {
  return (
    <div>
      <div>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
      </div>
      <div>
        <h3>Loader</h3>
        <button onClick={ showTemporary }>show temporary</button>
        <button onClick={ showLoader }>show loader</button>
        <button onClick={ hideLoader }>hide loader</button>
      </div>
    </div>
  );
};

export default Counter;
