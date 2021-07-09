interface Action {
  type: string;
  payload?: any;
}
// FSA - Flux Standard Action

const action2: Action = {
  type: 'user/login',
};


class Store {
  dispatch(action: Action) { /*...*/ }
  subscribe(listenerFn: () => void) { /*...*/ }
  getState(): any { /*...*/ }
}


// =======
// in app:
const store = new Store();

const appState = {
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

store.dispatch(action);



// reducer(s)
function usersReducer(state, action) {
  switch (action.type) {
    case 'user/login': {
      const nextState = { ...};
      return nextState;
    }

    case 'user/event': {
      const nextState = { ...};
      return nextState;
    }
    default: {
      return state;
    }
  }
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
