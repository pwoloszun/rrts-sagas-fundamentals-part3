import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import newSyncCounterReducer, { newSyncCounterSliceId } from './21b-newSyncCounter';
import asyncCounterWithSagaReducer, { asyncCounterWithSagaSliceId } from './22b-asyncCounterWithSaga';
import todosWithSagaReducer, { todosWithSagaSliceId } from './24c-todosWithSaga';
import roomDetectorsReducer, { sliceId as roomDetectorsSliceId } from './43-roomDetectors';

import rootSaga from './root-saga';
// import loggerMiddleware from '../features/25-redux-middleware/my-middleware/02-loggerMiddleware';

const isDevMode = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware();

const middleware = getDefaultMiddleware().concat([
  sagaMiddleware,
  // loggerMiddleware
]);

export function customCongfigStore() {
  const store = configureStore({
    devTools: isDevMode,
    reducer: {
      [newSyncCounterSliceId]: newSyncCounterReducer,
      [asyncCounterWithSagaSliceId]: asyncCounterWithSagaReducer,
      [todosWithSagaSliceId]: todosWithSagaReducer,
      [roomDetectorsSliceId]: roomDetectorsReducer,
    },
    middleware
  });
  sagaMiddleware.run(rootSaga);
  return store;
}

export const store = customCongfigStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;

