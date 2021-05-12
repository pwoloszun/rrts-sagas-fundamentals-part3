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
    incrementRequest: {
      reducer: (state, action: PayloadAction<{ incBy: number }>) => {
        state.isLoading = true;
      },
      prepare: (incBy: number) => {
        return {
          payload: { incBy }
        };
      }
    },
    incrementSuccess: {
      reducer: (state, action: PayloadAction<{ incBy: number }>) => {
        const { incBy } = action.payload;
        state.isLoading = false;
        state.asyncWithSagaValue += incBy;
      },
      prepare: (incBy: number) => {
        return { payload: { incBy } };
      }
    },

    // TODO: decrement flow

    // TODO: errorOccured
  },
});

export const actions = asyncCounterSlice.actions;

export default asyncCounterSlice.reducer;
