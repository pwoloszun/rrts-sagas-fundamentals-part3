import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'src/store/22b-asyncCounterWithSaga';

import Counter from '../../../../components/Counter';



export default function AsyncCounterUsingSaga() {
  const value =
    useSelector(selectors.selectAsyncCounterWithSagaValue);
  const isLoading =
    useSelector(selectors.selectIsLoading);
  const dispatch = useDispatch();

  const onIncrementHandler = () => {
    const action = actions.incrementRequest({ id: 100, incBy: 10 });
    dispatch(action);
  };

  return (
    <div>
      <Counter
        value={value}
        onIncrement={onIncrementHandler}
      />
      {isLoading && <div>Loading...</div>}
    </div>
  );
};
