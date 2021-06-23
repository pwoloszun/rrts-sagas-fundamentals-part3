import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from 'src/components/Counter';
import { actions, selectors } from 'src/store/21b-newSyncCounter'; // redux module

export default function NewSyncCounter() {
  const syncCounterValue = useSelector(
    selectors.selectCounterValue
  );
  const updatedAt = useSelector(
    selectors.selectFormattedUpdatedAt
  );
  const dispatch = useDispatch();

  const incrementHandler = () => {
    const action = actions.increment({ incBy: 5 });
    dispatch(action);
  };

  const decrementHandler = () => {
    const decAction = actions.decrement({
      decBy: 7,
      timestamp: Date.now()
    });
    dispatch(decAction);
  };

  return (
    <div>
      <h3>NewSyncCounter</h3>
      <p>Upd at {updatedAt}</p>
      <Counter
        value={syncCounterValue}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
      />
    </div>
  );
}
