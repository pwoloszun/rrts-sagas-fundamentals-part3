import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from 'src/components/Counter';
import { actions, selectors } from 'src/store/21b-newSyncCounter'; // redux module

// Container
export default function NewSyncCounter() {
  const syncCounterValue = useSelector(
    selectors.selectCounterValue
  );
  const updatedAt = 999999;
  const dispatch = useDispatch()

  const incrementHandler = () => {
    const action = actions.increment({ incBy: 5 });
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
      />
    </div>
  );
}
