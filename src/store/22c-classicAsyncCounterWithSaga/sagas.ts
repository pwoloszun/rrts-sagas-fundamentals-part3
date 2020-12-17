import { AnyAction } from 'redux';
import { put, takeEvery, select } from 'redux-saga/effects';

import * as api from 'src/api/counter-api';

import * as actions from './actions';
import * as types from './types';
import * as selectors from './selectors';

function* incrementCounter(action: AnyAction) {
  try {
    const { id, incrementBy } = action.payload;
    // TODO 1: select current AsyncCounter value from Store

    // TODO 2: update counter value using api

  } catch (e) {
    // TODO: handle error
  }
}

function* asyncIncrementSaga() {
  yield takeEvery(types.INCREMENT_REQUEST, incrementCounter);
}

// TODO: function* decrementCounter

// TODO: function* asyncDecrementSaga

export {
  asyncIncrementSaga,
  // TODO: asyncDecrementSaga
}
