import { createSelector } from 'reselect';

import { newSyncCounterSliceId } from './newSyncCounterSlice';
import { RootState } from '../store';

const selectSlice = (state: RootState) => {
  return state[newSyncCounterSliceId];
};

export const selectCounterValue = (state: RootState) => {
  const stateSlice = selectSlice(state);
  return stateSlice.value;
};

export const selectSquareCounterValue = (state: RootState) => {
  const counterValue = selectCounterValue(state);
  return counterValue ** 2;
};

const selectUpdatedAt = (state: RootState) => {
  const stateSlice = selectSlice(state);
  return stateSlice.updatedAt;
};

export const selectFormattedUpdatedAt = (state: RootState) => {
  return 'TOD';
};



// const selectExpensiveCpu = createSelector(
//   [selectXxx],
//   (xxxVal) => 123
// );

// export const selectFormattedUpdatedAt2 = createSelector(
//   [selectUpdatedAt],
//   (updatedAt) => new Date(updatedAt).toISOString()
// );

// export const selectCombined = createSelector(
//   [selectExpensiveCpu, selectUpdatedAt],
//   (expensiveValue, date) => expensiveValue *date
// );
