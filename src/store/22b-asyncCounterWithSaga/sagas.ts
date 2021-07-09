import { put, takeEvery, delay, select, call } from 'redux-saga/effects';

import * as counterApi from 'src/api/counter-api';

import { actions } from './asyncCounterWithSagaSlice';
import * as selectors from './selectors';

// private impl details
function* incrementWorkerSaga(action: any): Generator<any, any, any> {
  try {
    // TODO: get data from payload
    const { incBy } = action.payload;

    // TODO: delay for 2 secs
    yield delay(2000);

    // TODO: select current counter value from redux store
    const currValue = yield select(selectors.selectAsyncCounterWithSagaValue);
    // - 100

    // TODO: calculate next counter value === curr value + incBy
    const nextValue = currValue + incBy; // -100 + 20

    // TODO: update countervalue onserver using API
    const id = 100;
    // counterApi.updateCounterValue(id, { value: nextValue });
    const counterEntity = yield call(counterApi.updateCounterValue, id, { value: nextValue });

    // dispatch success action/event
    const incSuccessAction = actions.incrementSuccess({
      value: counterEntity.value
    });
    yield put(incSuccessAction);

  } catch (e) {
    throw e; // TODO handle errors
  }
}

// public interface
export function* incrementWatcherSaga() {
  // actions.incrementRequest.toString() === 'asyncCounterWithSaga/incrementRequest'
  // actions.incrementRequest.type === 'asyncCounterWithSaga/incrementRequest'
  yield takeEvery(actions.incrementRequest, incrementWorkerSaga);
}

// TODO: incrementWorkerSaga(action: any)
// TODO incrementWatcherSaga() 
