import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  updatedAt: number | null;
}

const initialState: CounterState = {
  value: 110,
  updatedAt: null,
};

export const newSyncCounterSliceId = 'newSyncCounter';

export const newSyncCounterSlice = createSlice({
  name: newSyncCounterSliceId,
  initialState,
  reducers: {
    increment: {
      reducer: (state, action: PayloadAction<any>) => {
        // TODO
      },
      prepare: () => {
        // TODO
        return {
          payload: null
        };
      }
    },

    // TODO: decrement

    // TODO: reset
  },
});

export const actions = newSyncCounterSlice.actions;

export default newSyncCounterSlice.reducer;
