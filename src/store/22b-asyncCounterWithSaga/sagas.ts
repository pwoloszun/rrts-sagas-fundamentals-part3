import { put, takeEvery, delay, select, call } from 'redux-saga/effects';

import * as counterApi from 'src/api/counter-api';

import { actions } from './asyncCounterWithSagaSlice';
import * as selectors from './selectors';
import { PayloadAction } from '@reduxjs/toolkit';

// private impl details
function* incrementWorkerSaga(action: PayloadAction<{ incBy: number }>): Generator<any, any, any> {
  try {
    // TODO: get data from payload
    const { incBy } = action.payload;

    // TODO: delay for 2 secs
    yield delay(2000);

    // TODO: select current counter value from redux store
    const fromStoreValue = yield select(selectors.selectAsyncCounterWithSagaValue);

    // TODO: calculate next counter value === curr value + incBy
    const nextValue = fromStoreValue + incBy;

    // TODO: update countervalue onserver using API
    const id = 100;
    // === counterApi.updateCounterValue(id, { value: nextValue });
    const counterEntity = yield call(counterApi.updateCounterValue, id, { value: nextValue });

    // TODO: dispatch incrementSuccess event
    const succAction = actions.incrementSuccess({ value: counterEntity.value });
    yield put(succAction);
  } catch (e) {
    throw e; // TODO handle errors
  }
}

// public interface
export function* incrementWatcherSaga() {
  // console.log(actions.incrementRequest.type);
  yield takeEvery(actions.incrementRequest, incrementWorkerSaga);
  // yield takeEvery('asyncCounterWithSaga/incrementRequest', incrementWorkerSaga);
}

// TODO: incrementWorkerSaga(action: any)
// TODO incrementWatcherSaga() 
