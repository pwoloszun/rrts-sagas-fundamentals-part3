import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import syncCounterReducer, { syncCounterSliceId } from './21-syncCounter';
import newSyncCounterReducer, { newSyncCounterSliceId } from './21b-newSyncCounter';
import asyncCounterWithSagaReducer, { asyncCounterWithSagaSliceId } from './22b-asyncCounterWithSaga';
import classicAsyncCounterWithSagaReducer, { classicAsyncCounterWithSagaSliceId } from './22c-classicAsyncCounterWithSaga';
import todosWithSagaReducer, { todosWithSagaSliceId } from './24c-todosWithSaga';
import classicTodosWithSagaReducer, { classicTodosWithSagaSliceId } from './24d-classicTodosWithSaga';

import rootSaga from './root-saga';

const isDevMode = process.env.NODE_ENV === 'development';
const sagaMiddleware = createSagaMiddleware();

const middleware = getDefaultMiddleware().concat([
  sagaMiddleware,
  // loggerMiddleware
]);

export function customCongfigStore(preloadedState: any = undefined) {
  const store = configureStore({
    devTools: isDevMode,
    reducer: {
      [syncCounterSliceId]: syncCounterReducer,
      [newSyncCounterSliceId]: newSyncCounterReducer,
      [asyncCounterWithSagaSliceId]: asyncCounterWithSagaReducer,
      [classicAsyncCounterWithSagaSliceId]: classicAsyncCounterWithSagaReducer,
      [todosWithSagaSliceId]: todosWithSagaReducer,
      [classicTodosWithSagaSliceId]: classicTodosWithSagaReducer,
    },
    middleware,
    preloadedState
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

