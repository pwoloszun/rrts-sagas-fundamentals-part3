import { reduce, values } from 'lodash';
import { call, all } from 'redux-saga/effects'

// sagas
import { sagas as asyncCounterWithSagaSagas } from './22b-asyncCounterWithSaga';
import { sagas as classicAsyncCounterWithSagaSagas } from './22c-classicAsyncCounterWithSaga';

import { sagas as todosWithSagaSagas } from './24c-todosWithSaga';

// merge all App sagas here
const allSagasMap = {
  asyncCounterWithSagaSagas,
  todosWithSagaSagas,
  classicAsyncCounterWithSagaSagas,
};

export default function* rootSaga() {
  const allSagasList = reduce(allSagasMap, (memo, sliceSagasMap) => {
    const sliceSagasList = values(sliceSagasMap);
    return memo.concat(sliceSagasList as any);
  }, [] as Generator[]);
  yield all(allSagasList.map((saga) => call(saga as any)));
}
