import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AsyncCounterWithSagaState {
  asyncWithSagaValue: number;
  isLoading: boolean;
  errorInfo: {
    info: string;
    error: Error;
  } | undefined;
}

const initialState: AsyncCounterWithSagaState = {
  asyncWithSagaValue: -997,
  isLoading: false,
  errorInfo: undefined
};

export const asyncCounterWithSagaSliceId = 'asyncCounterWithSaga';

export const asyncCounterSlice = createSlice({
  name: asyncCounterWithSagaSliceId,
  initialState,
  reducers: {

    incrementRequest: (state, action: PayloadAction<{ incBy: number }>) => {
      state.isLoading = true;
    },

    incrementSuccess: (state, action: PayloadAction<{ value: number }>) => {
      const { value } = action.payload;
      state.isLoading = false;
      state.asyncWithSagaValue = value;
    },
  },
});

export const actions = asyncCounterSlice.actions;

export default asyncCounterSlice.reducer;
