// import { produce } from 'immer';

// import * as types from "./types";

// initial feature state value
const initialState = {
  value: 0,
  updatedAt: null
};

export const syncCounterSliceId = 'syncCounter';

export default function syncCounterReducer(state = initialState, action: any) {
  switch (action.type) {
    // case types.INCREMENT: {
    // }
    default:
      return state;
  }
}
