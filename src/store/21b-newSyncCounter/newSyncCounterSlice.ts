import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  updatedAt: number | null;
}

const initialState: CounterState = {
  value: 100,
  updatedAt: null,
};

export const newSyncCounterSliceId = 'newSyncCounter';

const newSyncCounterSlice = createSlice({
  name: newSyncCounterSliceId,
  initialState,
  reducers: {

    incremented: (state: CounterState, action: PayloadAction<{ incBy: number; }>) => {
      const { incBy } = action.payload;
      state.value += incBy;
    },

    errorOccured: (state, action: PayloadAction<any>) => {
      // TODO
    },

    // TODO: decrement

    // TODO: reset
  },
});

export const actions = newSyncCounterSlice.actions;

export default newSyncCounterSlice.reducer;
