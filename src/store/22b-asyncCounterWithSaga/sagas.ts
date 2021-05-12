import { put, takeEvery, call, select } from 'redux-saga/effects';
import * as selectors from './selectors';

import { delay } from '../../utils/randoms';
import { actions } from './asyncCounterWithSagaSlice';
import { updateCounterValue } from 'src/api/counter-api';

function* incrementCounterWorker(action: any): Generator<any, any, any> {
  try {
    yield call(delay, 1800); // === {type: 'CALL', args: [delay, 1800]}; 

    const currValue = yield select(selectors.selectAsyncCounterWithSagaValue); // {type: 'SELECT', args: [() => ...]}
    const { incBy, id } = action.payload;
    const nextVal = currValue + incBy;

    const counterValueEntity = yield call(updateCounterValue, id, { value: nextVal });

    const nextaction = actions.incrementSuccess({ value: counterValueEntity.value });
    yield put(nextaction); // === {type: 'PUT', args: [...]}
  } catch (e) {
    // yield put(actions.errorOccured('incrementCounter', e));
  }
}

function* asyncIncrementWatcher() {
  yield takeEvery(actions.incrementRequest, incrementCounterWorker); //=== {type: 'TAKE_EVERY', args: [...]}
}

// TODO: decrementCounter(action)

// TODO asyncDecrementSaga() 

export {
  asyncIncrementWatcher,
  // asyncDecrementSaga // TODO: export
}
