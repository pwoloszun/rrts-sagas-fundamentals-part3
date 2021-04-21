import { createSelector } from 'reselect';

import { syncCounterSliceId } from './reducer';
import { RootState } from '../store';

const selectSlice = (state: RootState) => {
  return state[syncCounterSliceId];
};

export const selectCounterValue = (state: RootState) => {
  const stateSlice = selectSlice(state);
  return stateSlice.value;
};

const selectUpdatedAt = (state: RootState) => {
  const stateSlice = selectSlice(state);
  return stateSlice.updatedAt;
};

export const selectFormattedUpdatedAt = (state: RootState) => {
  const updatedAt = selectUpdatedAt(state);
  return new Date(updatedAt).toISOString();
};

export const selectSquareCounterValue = (state: RootState) => {
  const counterValue = selectCounterValue(state);
  return counterValue ** 2;
};

// const selectExpensiveCpu = createSelector(
//   [selectXxx],
//   (xxxVal) => 123
// );

export const selectFormattedUpdatedAt2 = createSelector(
  [selectUpdatedAt],
  (updatedAt) => new Date(updatedAt).toISOString()
);

// export const selectCombined = createSelector(
//   [selectExpensiveCpu, selectUpdatedAt],
//   (expensiveValue, date) => expensiveValue *date
// );
