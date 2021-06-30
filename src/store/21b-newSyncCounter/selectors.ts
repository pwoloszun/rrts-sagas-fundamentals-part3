import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { newSyncCounterSliceId } from './newSyncCounterSlice';

const selectStateSlice = (state: RootState) => {
  return 123; // TODO
};

export const selectCounterValue =
  (state: RootState) => state.newSyncCounter.value;

export const selectCounterUpdatedAt =
  (state: RootState) => state.newSyncCounter.updatedAt;

export const selectCounterFormattedUpdatedAt =
  (state: RootState) => {
    const updatedAt = state.newSyncCounter.updatedAt
    if (updatedAt === null) {
      return '';
    } else {
      return new Date(updatedAt).toISOString();
    }
  };

// TODO
// export const selectCounterValue

// TODO
// export const selectSquareValue
