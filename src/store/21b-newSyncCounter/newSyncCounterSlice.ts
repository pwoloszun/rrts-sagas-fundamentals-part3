import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState { // state slice shape
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

    decremented: (state: CounterState, action: PayloadAction<{ decBy: number; modificationDt: number; }>) => {
      const { decBy, modificationDt } = action.payload;
      state.value -= decBy;
      state.updatedAt = modificationDt;
    },

    // TODO: decrement
  },
});

export const actions = newSyncCounterSlice.actions;

export default newSyncCounterSlice.reducer;
