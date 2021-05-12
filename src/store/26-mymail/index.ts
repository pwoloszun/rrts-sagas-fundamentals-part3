import reducer, { sliceId, actions } from './slice';

import * as selectors from './selectors';
import * as sagas from './sagas';

export {
  sliceId,
  selectors,
  actions,
  sagas,
}

export default reducer;
