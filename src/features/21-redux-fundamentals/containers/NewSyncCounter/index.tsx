import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from 'src/components/Counter';
import { actions, selectors } from 'src/store/21b-newSyncCounter'; // redux module

export default function NewSyncCounter() {
  const syncCounterValue = useSelector(
    selectors.selectCounterValue
  );
  const updatedAt = useSelector(selectors.selectFormattedUpdatedAt);

  const sqr = useSelector(selectors.selectSquareCounterValue);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    const action = actions.syncCounterIncremented({
      incBy: 10,
      date: Date.now(),
    });
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
