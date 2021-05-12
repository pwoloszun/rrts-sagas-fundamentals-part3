import { date } from 'faker';

interface Action { // app Events
  type: string;
  payload?: any;
}

// FSA - Flux standard Action

class Store {
  dispatch(action: Action) { /*...*/ }
  subscribe(listenerFn: () => void) { /*...*/ }
  getState(): any { /*...*/ }
}


// =======
// in app:
const store = new Store();

// root state shape
const state = {
  counter: { // state slice
    value: 997
  },

  users: { // users state slice
    entities: [],
    count: 123,
    name: 'qq'
  },

  todos: [] //state slice

};



// FSA Flux Standard Action
// actions
const action: Action = {
  type: 'users/fetched',
  payload: { age: 1233, name: 'qq' },
}; // "event"

store.dispatch(action);



// reducer(s)
function usersReducer(state, action) {

  return {};
}

function counterReducer(state, action) {
}


function rootReducer(state, action) {
  const nextUsersState = usersReducer(state.users, action);
  const nextCounterState = counterReducer(state.counter, action);

  return {
    ...state,
    users: nextUsersState,
    counter: nextCounterState,
  };
}



// client code - Components

// Counter component
store.subscribe(() => {
  const state = store.getState();
  //do smth modufy local cmp state
});

// // Todos component
store.subscribe(() => {
  const state = store.getState();
  //do smth
});
