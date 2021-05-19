import { createSelector } from 'reselect';

import { RootState } from '../store';

import { asyncCounterWithSagaSliceId } from './asyncCounterWithSagaSlice';

const selectFeature = (state: RootState) => state[asyncCounterWithSagaSliceId];

export const selectAsyncCounterValue = createSelector(
  selectFeature,
  (state) => state.asyncWithSagaValue
);

// TODO
export const selectIsLoading = createSelector(
  selectFeature,
  (state) => state.isLoading
);
