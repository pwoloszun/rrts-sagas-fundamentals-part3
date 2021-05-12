import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState { // state shape slice
  value: number;
  updatedAt: number | null;
  error: string | null;
}

const initialState: CounterState = {
  value: 110,
  updatedAt: null,
  error: null,
};

export const newSyncCounterSliceId = 'newSyncCounter';

interface IncrementPayload {

}

export const newSyncCounterSlice = createSlice({
  name: newSyncCounterSliceId,
  initialState,
  reducers: {

    syncCounterIncremented: (state, action: PayloadAction<{ incBy: number; date: number; }>) => {
      const { incBy } = action.payload;
      state.value = state.value + incBy;
    },

    errorOccured: (state) => {
      state.error = 'ola boga!';
    },

    // TODO: decrement

    // TODO: reset
  },
});

export const actions = newSyncCounterSlice.actions;

// const action1 = syncCounterIncremented({ incBy: 10 }) // {type: 'newSyncCounter/increment'}
// const action2 = errorOccured() // type === 'newSyncCounter/errorOccured'


export default newSyncCounterSlice.reducer;
