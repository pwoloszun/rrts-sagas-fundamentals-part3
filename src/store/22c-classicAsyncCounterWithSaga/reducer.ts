import { produce } from 'immer';

import * as types from './types';
import { AnyAction } from 'redux';

interface SliceState {
  asyncValue: number;
  updatedAt: number | null;
  isLoading: boolean;
  errorMessage: string | null;
}

const initialState: SliceState = {
  asyncValue: 100,
  updatedAt: null,
  isLoading: false,
  errorMessage: null,
};

export default function asyncCounterReducer(
  state = initialState,
  action: AnyAction
): SliceState {
  switch (action.type) {
    case types.INCREMENT_REQUEST: {
      return produce(state, (draftState) => {
        draftState.isLoading = true;
      });
    }
    case types.INCREMENT_SUCCESS: {
      const { nextValue } = action.payload;
      return produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.asyncValue = nextValue;
      });
    }
    case types.INCREMENT_ERROR: {
      return state; // TODO
    }
    default:
      return state;
  }
}

export const classicAsyncCounterWithSagaSliceId = 'classicAsyncCounterWithSaga';
