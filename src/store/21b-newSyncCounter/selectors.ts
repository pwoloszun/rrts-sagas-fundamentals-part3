import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { newSyncCounterSliceId } from './newSyncCounterSlice';

const selectStateSlice = (state: RootState) => {
  return state[newSyncCounterSliceId];
};

export const selectCounterValue =
  (state: RootState) => selectStateSlice(state).value;

export const selectCounterUpdatedAt =
  (state: RootState) => selectStateSlice(state).updatedAt;

export const selectCounterFormattedUpdatedAt =
  (state: RootState) => {
    const updatedAt = selectCounterUpdatedAt(state);
    if (updatedAt === null) {
      return '';
    } else {
      return new Date(updatedAt).toISOString();
    }
  };
