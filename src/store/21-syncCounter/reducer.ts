import { produce } from 'immer';

import * as types from "./types";

// TODO: Slice State Shape
type StateSlice = {
  value: number;
  updatedAt: number;
};

// initial feature state value
const initialState: StateSlice = {
  value: -997,
  updatedAt: 200000,
};

// feature/slice id
export const syncCounterSliceId = 'syncCounter';

export default function syncCounterReducer(state = initialState, action: any): StateSlice {
  switch (action.type) {

    case types.INCREMENT: {
      const { incBy, lastModificationDt } = action.payload;
      const nextState = produce(state, (draftState) => {
        draftState.value = state.value + incBy;
        draftState.updatedAt = lastModificationDt;
      });
      return nextState;
    }

    case 'costam': {
      return state;
    }

    default:
      return state;
  }
}
