import { AnyAction } from 'redux';
import { put, takeEvery, select, StrictEffect, call } from 'redux-saga/effects';

import * as api from 'src/api/counter-api';

import * as actions from './actions';
import * as types from './types';
import * as selectors from './selectors';
import { values } from 'lodash';

// worker
function* incrementCounter(action: AnyAction): any {
  try {
    const { id, incrementBy } = action.payload;
    // TODO 1: select current AsyncCounter value from Store
    const currVal = yield select(selectors.selectAsyncCounterValue);

    const nextVal = currVal + incrementBy;
    // TODO 2: update counter value using api
    // const fff = await api.updateCounterValue(id, { value: nextVal });
    const counterEntity = yield call(api.updateCounterValue, id, { value: nextVal });

    // dispatch success action to Store using put() effect
    const nextAction = actions.incrementSuccess(counterEntity.value);
    yield put(nextAction);
  } catch (e) {
    // TODO: handle error
  }
}

// wacher saga
function* asyncIncrementSaga() {
  yield takeEvery(types.INCREMENT_REQUEST, incrementCounter);
}

// fetch current async counter value from server
// api.getCounterValue(id);

// TODO: function* decrementCounter

// TODO: function* asyncDecrementSaga

export {
  asyncIncrementSaga,
  // TODO: asyncDecrementSaga
}
