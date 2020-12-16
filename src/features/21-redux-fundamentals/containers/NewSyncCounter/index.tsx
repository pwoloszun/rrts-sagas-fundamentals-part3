import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from '../../../../components/Counter';

export default function NewSyncCounter() {
  const syncCounterValue = 123;

  const incrementHandler = () => { };

  return (
    <div>
      <h3>NewSyncCounter</h3>
      <Counter
        value={syncCounterValue}
        onIncrement={incrementHandler}
      />
    </div>
  );
}
