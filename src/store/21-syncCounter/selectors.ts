import { createSelector } from 'reselect';

import { syncCounterSliceId } from './reducer';
import { RootState } from '../store';

// const selectFeature

export const selectCounterValue =
  (state: RootState) => state[syncCounterSliceId].value;

// TODO
// export const selectSquareValue

// TODO:
// selectUpdatedAt

// TODO:
// selectFormattedUpdatedAt - use: date.toISOString()
