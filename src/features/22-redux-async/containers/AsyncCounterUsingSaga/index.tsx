import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Counter from '../../../../components/Counter';

import {
  actions, selectors
} from '../../../../store/22b-asyncCounterWithSaga';

export default function AsyncCounterUsingSaga() {
  const dispatch = useDispatch();
  const onIncrement = useCallback(() => dispatch(actions.incrementRequest(2)), [dispatch]);
  const onDecrement = useCallback(() => dispatch(actions.decrementRequest(7)), [dispatch]);
  const value = useSelector(selectors.selectAsyncCounterWithSagaValue);
  const isLoading = useSelector(selectors.selectIsLoading);
  return (
    <div>
      <Counter
        value={value}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
      {isLoading && <div>Loading...</div>}
    </div>
  );
};
