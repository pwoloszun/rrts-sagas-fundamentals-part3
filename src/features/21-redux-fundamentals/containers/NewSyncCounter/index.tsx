import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from 'src/components/Counter';
import { actions, selectors } from 'src/store/21-syncCounter'; // redux module

export default function NewSyncCounter() {
  const syncCounterValue = useSelector(
    selectors.selectCounterValue
  );
  const updatedAt = 123;
  const sqr = 10 ** 2;
  const dispatch = useDispatch();

  const incrementHandler = () => {
    const action = actions.incrementAction(20, Date.now());
    dispatch(action);
  };

  const decrementHandler = () => {
    // TODO
  };

  return (
    <div>
      <h3>NewSyncCounter</h3>
      <p>Upd at {updatedAt}</p>
      <Counter
        value={syncCounterValue}
        squareValue={sqr}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
      />
    </div>
  );
}
