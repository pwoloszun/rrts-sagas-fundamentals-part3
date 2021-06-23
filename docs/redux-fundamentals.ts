interface Action { // aka Events
  type: string;
  payload?: any;
}

const action = { type: 'User Login' };


class Store {
  dispatch(action: Action) { /*...*/ }
  subscribe(listenerFn: () => void) { /*...*/ }
  getState(): any { /*...*/ }
}


// =======
// in app:
const store = new Store();

const state = {

  user: {
    firstName: 'bob',
    lastName: 'smith',
    // fullName: '...'
  },

  newSyncCounter: {
  },

  counter: { // state slice
    value: 997
  },

  users: { // users state slice
    entities: [],
    count: 123
  },
  todos: [] //state slice
};



// actions
const action = {
  type: 'users/fetched',
  payload: {
    users: [{ id: 123, name: 'bob' }, { id: 2, name: 'ed' }]
  }
}; // "event"
// FSA  Flux Standard Action

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












todosFacade.create('buy bread');
// // redux

// // event that happend
// const action = { type: 'User/Buy Bread' };
// store.dispatch(action);


// // how app handles event
// function userReducer(state, action) {
//   // ,,,,
//   return {};
// }
















