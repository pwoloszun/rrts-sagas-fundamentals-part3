import { produce } from 'immer';

import * as types from "./types";

// TODO: Slice State Shape
type StateSlice = {
  value: number;
  updatedAt: number;
};

// initial feature state value
const initialState: StateSlice = {
  value: 10, // primary state

  // NO computed/derived state

  updatedAt: 200000,
};

// feature/slice id
export const syncCounterSliceId = 'syncCounter';

export default function syncCounterReducer(state = initialState, action: any): StateSlice {
  switch (action.type) {

    case types.INCREMENT: {
      const { incBy, lastModificationDt } = action.payload;
      const nextState2 = produce(state, (draftState) => {
        draftState.value = state.value + incBy;
      });

      return nextState2;
    }

    case 'errorOccured': {
      return state;
    }

    default:
      return state;
  }
}
