import { createSelector } from '@reduxjs/toolkit';
// reselect

import { RootState } from '../store';
import { newSyncCounterSliceId } from './newSyncCounterSlice';

const selectStateSlice = (state: RootState) => {
  return state[newSyncCounterSliceId];
};

// export const selectCounterValue =
//   (state: RootState) => selectStateSlice(state).value;

export const selectCounterValue = createSelector(
  [selectStateSlice],
  (sliceState) => sliceState.value
);

export const selectCounterUpdatedAt =
  (state: RootState) => selectStateSlice(state).updatedAt;

const selectGggHhh = (state: RootState) => 123;

// export const selectCounterFormattedUpdatedAt =
//   (state: RootState) => {
//     const updatedAt = selectCounterUpdatedAt(state);
//     if (updatedAt === null) {
//       return '';
//     } else {
//       return new Date(updatedAt).toISOString();
//     }
//   };
export const selectCounterFormattedUpdatedAt = createSelector(
  [
    selectCounterUpdatedAt,
    selectGggHhh
  ],
  (updatedAt, gggHhh) => {
    if (updatedAt === null) {
      return '';
    } else {
      return new Date(updatedAt).toISOString();
    }
  }
);

