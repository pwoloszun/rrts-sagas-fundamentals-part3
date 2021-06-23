import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { newSyncCounterSliceId } from './newSyncCounterSlice';

const selectStateSlice = (state: RootState) => {
  return state[newSyncCounterSliceId];
};

export const selectCounterValueOLD =
  (state: RootState) => selectStateSlice(state).value;

const selectGgg = (state: RootState) => 10;

export const selectCounterValue = createSelector(
  [selectStateSlice, selectGgg],
  (stateSlice, ggg) => stateSlice.value * ggg
);

const selectUpdatedAt =
  (state: RootState) => selectStateSlice(state).updatedAt;

export const selectFormattedUpdatedAt = (state: RootState) => {
  const updatedAt = selectUpdatedAt(state);
  if (updatedAt === null) {
    return '';
  } else {
    return new Date(updatedAt).toISOString();
  }
};


