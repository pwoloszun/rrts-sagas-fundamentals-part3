import { put, takeEvery, delay, select, call } from 'redux-saga/effects';

import { actions } from './asyncCounterWithSagaSlice';
import * as selectors from './selectors';
import * as api from 'src/api/counter-api';

function* incrementCounterWorker(action: any): any {
  const { incBy } = action.payload;
  try {
    const value = yield select(selectors.selectAsyncCounterWithSagaValue);
    yield delay(2000);
    const nextValue = value + incBy;
    const counterEntity = yield call(api.updateCounterValue, 100, { value: nextValue });
    const successAction = actions.incrementSuccess({ value: counterEntity.value });
    yield put(successAction);
  } catch (e) {
    throw e; // TODO
  }
}

export function* asyncIncrementWatcherSaga() {
  yield takeEvery(actions.incrementRequest, incrementCounterWorker);
}

