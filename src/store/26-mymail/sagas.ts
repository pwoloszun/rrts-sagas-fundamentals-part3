// import { put, takeEvery, call, StrictEffect } from 'redux-saga/effects';

// import { actions } from './slice';

// function* someWorkerSaga(action: any): Generator<StrictEffect> {
//   try {
//     // const todosNormalized = yield call(api.getAll);
//     // yield put(actions.fetchTodosSuccess(todosNormalized as NormalizedTodos));
//   } catch (e) {
//     console.error(e); // TODO: handle error
//   }
// }

function* someWatcher() {
  // yield takeEvery(types.FETCH_REQUEST, someWorkerSaga);
}

export {
  someWatcher,
}
