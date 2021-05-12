import { put, takeEvery } from 'redux-saga/effects';

import { delay } from '../../utils/randoms';
import { actions } from './asyncCounterWithSagaSlice';

function* incrementCounter(action: any) {
  try {
    yield delay(1800);
    yield put(actions.incrementSuccess(8));
  } catch (e) {
    // yield put(actions.errorOccured('incrementCounter', e));
  }
}

function* asyncIncrementSaga() {
  yield takeEvery(actions.incrementRequest, incrementCounter);
}

// TODO: decrementCounter(action)

// TODO asyncDecrementSaga() 

export {
  asyncIncrementSaga,
  // asyncDecrementSaga // TODO: export
}
