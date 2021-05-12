import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { sliceId } from './slice';

const selectFeature = (state: RootState) => {
  return state[sliceId];
};

// TODO
