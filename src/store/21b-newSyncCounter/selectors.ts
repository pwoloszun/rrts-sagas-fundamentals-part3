import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit';


import { RootState } from '../store';
import { newSyncCounterSliceId } from './newSyncCounterSlice';

const selectStateSlice =
  (state: RootState) => state[newSyncCounterSliceId];

export const selectCounterValue =
  (state: RootState) => {
    const stateSlice = selectStateSlice(state);
    return stateSlice.value;
  };

// export const selectCounterValue = createSelector(
//   [selectStateSlice],
//   (stateSlice) => stateSlice.value
// );

export const selectUpdatedAt =
  (state: RootState) => {
    const stateSlice = selectStateSlice(state);
    return stateSlice.updatedAt;
  };

export const selectFormattedUpdatedAt =
  (state: RootState) => {
    const updatedAt = selectUpdatedAt(state);
    if (updatedAt === null) {
      return null;
    } else {
      return new Date(updatedAt).toISOString();
    }
  };



// TODO
// export const selectCounterValue

// TODO
// export const selectSquareValue
