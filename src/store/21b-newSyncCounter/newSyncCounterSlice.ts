import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import produce from 'immer';

// produce({ value: 123 }, (draftState) => {
//   draftState.value += 10;
// });


interface CounterState { // slice state shape
  value: number;
  updatedAt: number | null;
}

const initialState: CounterState = {
  value: 110,
  updatedAt: null,
};

export const newSyncCounterSliceId = 'newSyncCounter';

const newSyncCounterSlice = createSlice({
  name: newSyncCounterSliceId,
  initialState,
  reducers: {

    increment: (
      draftState,
      action: PayloadAction<{ incBy: number; }>
    ) => {
      console.log('redux inc', action);
      // action.payload.incBy
      const { incBy } = action.payload;
      draftState.value += incBy;
    },

    decrement: (state, action: PayloadAction<{ decBy: number; timestamp: number; }>) => {
      const { decBy, timestamp } = action.payload;
      state.value -= decBy;
      state.updatedAt = timestamp;
    }

  },

  // TODO: decrement

  // TODO: reset
});

export const actions = newSyncCounterSlice.actions;
// const action = actions.increment({ incBy: 123 });

export default newSyncCounterSlice.reducer;
