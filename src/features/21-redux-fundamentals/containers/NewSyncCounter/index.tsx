import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from 'src/components/Counter';
import { actions, selectors } from 'src/store/21b-newSyncCounter'; // redux module

// Container
export default function NewSyncCounter() {
  const syncCounterValue = useSelector(
    selectors.selectCounterValue
  );
  const updatedAt = useSelector(
    selectors.selectFormattedUpdatedAt
  );
  const dispatch = useDispatch()

  const incrementHandler = () => {
    const action = actions.increment({ incBy: 5 });
    dispatch(action);
  };

  const decrementHandler = () => {
    const timestamp = Date.now();
    const action = actions.decrement({
      decBy: 1,
      timestamp
    });
    dispatch(action);
  };

  return (
    <div>
      <h3>NewSyncCounter</h3>
      <p>Upd at {updatedAt}</p>

      {/* Pure */}
      <Counter
        value={syncCounterValue}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
      />
    </div>
  );
}
