import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectors, actions } from 'src/store/22b-asyncCounterWithSaga';

import Counter from '../../../../components/Counter';
// reqest/pending -> success/resolved
//                -> error/rejected

export default function AsyncCounterUsingSaga() {
  const value = useSelector(
    selectors.selectAsyncCounterWithSagaValue
  );
  const isLoading = useSelector(
    selectors.selectIsLoading
  );
  const dispatch = useDispatch();

  const onIncrementHandler = () => {
    const action = actions.incrementRequest({ incBy: 10 });
    dispatch(action);
  };

  return (
    <div>
      <Counter
        value={value}
        onIncrement={onIncrementHandler}
      />
      {isLoading && <h1>Loading...</h1>}
    </div>
  );
};
