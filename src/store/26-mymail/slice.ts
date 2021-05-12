import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MailEntityParams } from 'src/api/mymail-api';

export const sliceId = 'mymail';

interface SliceState {
  // TODO
}

const initialState: SliceState = {
  // TODO
};

const mymailSlice = createSlice({
  name: sliceId,
  initialState,
  reducers: {

    // TODO

  },
});

const { actions, reducer } = mymailSlice;

export { actions };
export default reducer;
