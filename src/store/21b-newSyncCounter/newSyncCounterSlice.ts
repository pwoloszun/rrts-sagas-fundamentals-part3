interface CounterState {
  value: number;
  updatedAt: number | null;
}

const initialState: CounterState = {
  value: 110,
  updatedAt: null,
};

export const newSyncCounterSliceId = 'newSyncCounter';

export default function reducer(state = initialState, action: any) {
  return state;
};
