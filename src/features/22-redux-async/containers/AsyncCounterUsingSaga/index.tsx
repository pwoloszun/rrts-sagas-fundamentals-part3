import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from 'src/store/22b-asyncCounterWithSaga';

import Counter from '../../../../components/Counter';



// request/pending  -> success/resolve
//                  -> error/reject



export default function AsyncCounterUsingSaga() {
  const value = useSelector(
    selectors.selectAsyncCounterWithSagaValue
  );
  const isLoading = useSelector(
    selectors.selectIsLoading
  );

  const dispatch = useDispatch();

  const onIncrementHandler = () => {
    const action = actions.incrementRequest({
      incBy: 20
    });
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
