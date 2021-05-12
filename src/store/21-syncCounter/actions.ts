import * as types from './types';

export function syncCounterIncremented(incBy: number, lastModificationDt: number) {
  // TODO
  return {
    type: types.INCREMENT,
    payload: {
      incBy,
      lastModificationDt
    }
  };
}

// TODO
// export function decrementAction

// TODO
// export function resetAction
