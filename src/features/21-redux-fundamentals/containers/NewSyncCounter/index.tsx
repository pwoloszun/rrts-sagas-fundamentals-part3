import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from 'src/components/Counter';
import { actions, selectors } from 'src/store/21b-newSyncCounter'; // redux module
import { RootState } from '../../../../store/store';

export default function NewSyncCounter() {
  const syncCounterValue = useSelector(
    (state: RootState) => state.newSyncCounter.value
  );
  const updatedAt = useSelector(
    (state: RootState) => state.newSyncCounter.updatedAt
  );
  const dispatch = useDispatch();

  const incrementHandler = () => {
    const action = actions.increment({
      incBy: 20
    });
    dispatch(action);
  };

  const decrementHandler = () => {
    const action = actions.decrement({
      decBy: 5,
      timestamp: Date.now()
    });
    dispatch(action);
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
