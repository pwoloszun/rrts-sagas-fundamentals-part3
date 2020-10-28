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
    decrementRequest: {
      reducer: (state, action: PayloadAction<{ decBy: number }>) => {
        state.isLoading = true;
      },
      prepare: (decBy: number) => {
        return {
          payload: { decBy }
        };
      }
    },
    decrementSuccess: {
      reducer: (state, action: PayloadAction<{ decBy: number }>) => {
        const { decBy } = action.payload;
        state.isLoading = false;
        state.asyncWithSagaValue -= decBy;
      },
      prepare: (decBy: number) => {
        return {
          payload: { decBy }
        };
      }
    },
    errorOccured: {
      reducer: (state, action: PayloadAction<{ info: string; error: Error; }>) => {
        const { info, error } = action.payload;
        state.isLoading = false;
        state.errorInfo = { info, error };
      },
      prepare: (info: string, error: Error) => {
        return {
          error: true,
          payload: { info, error },
        };
      }
    },
  },
});

export const actions = asyncCounterSlice.actions;

export default asyncCounterSlice.reducer;
