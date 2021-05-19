import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Counter from 'src/components/Counter';
import { actions, selectors } from 'src/store/22b-asyncCounterWithSaga';

export default function AsyncCounterUsingSaga(): React.ReactElement {
  const counterId = 100;

  const value = useSelector(selectors.selectAsyncCounterValue);
  const isLoading = useSelector(selectors.selectIsLoading);

  const dispatch = useDispatch();
  const onIncrement = () => {
    const action = actions.incrementRequested({ id: counterId, incBy: 10 });
    dispatch(action);
  };
  // const onDecrement = () => dispatch(actions.decrementRequest(counterId, 5));

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <Counter
        value={value}
        onIncrement={onIncrement}
      />
    </div>
  );
};



// some op REQ -> some op SUCC
//             -> some op ERR
