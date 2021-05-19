import { put, takeEvery, delay, select, call, StrictEffect } from 'redux-saga/effects';

import { actions, IncreentRequestedAction } from './asyncCounterWithSagaSlice';
import * as selectors from './selectors';
import { updateCounterValue, CounterValue, getCounterValue } from 'src/api/counter-api';

function* incrementCounterWorker(action: IncreentRequestedAction): Generator<StrictEffect> {
  try {
    const { id, incBy } = action.payload;
    yield delay(1800);

    const currValue = (yield select(selectors.selectAsyncCounterValue)) as number;
    const nextValue = currValue + incBy;

    const counterEntity = (yield call(updateCounterValue, id, { value: nextValue })) as CounterValue;

    yield put(actions.incrementSuccseed({ value: counterEntity.value }));
  } catch (e) {
    // TODO : error handling
  }
}

export function* asyncIncrementRequestWatcher() {
  yield takeEvery(actions.incrementRequested, incrementCounterWorker);
}

// const counterEntity = getCounterValue(id)
// counterEntity.value

// TODO: decrementCounter(action)

// TODO asyncDecrementSaga() 
