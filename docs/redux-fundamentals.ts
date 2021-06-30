// FSA - Flux Standard Action
interface Action { // Events aka Actions
  type: string;
  payload?: any;
}

const action = {
  type: 'source/event'
}

const addProductToCartEvent = {
  type: 'cartWidget/addProducet'
}




class Store {
  dispatch(action: Action) { /*...*/ }
  subscribe(listenerFn: () => void) { /*...*/ }
  getState(): any { /*...*/ }
}


// =======
// in app:
const store = new Store();

// global app state
const state = {
  counter: 123, // state slice

  user: {}, // state slice

  admin: { // slice state shape
  }, // state slice

  order: {
  }, // state slice

  catalog: {} // state slice

};



// actions
const action = {
  type: 'users/fetched',
  payload: {
    users: [{ id: 123, name: 'bob' }, { id: 2, name: 'ed' }]
  }
}; // "event"

store.dispatch(action);



// slice reducer
function usersReducer(sliceState = initialState, action) {
  switch (action.type) {
    case 'newSyncCounter/increment': {
      const nextState = { ...};
      return nextState;
    }
    case 'newSyncCounter/ggg': {
      const nextState = { ...};
      return nextState;
    }
    default:
      sliceState;
  }

}

// slice reducer
function counterReducer(sliceState, action) {

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





/////===============
// function ReactComp() {
//   const action = actions.addProductToCart();
//   const cart = useSelector(selectors.selectCart);

//   // on click
//   store.dispatch(action)

//   return (
//     <div>{ cart } < /div>
//   )
// }



// function test() {
//   const initialCart = useSelector(selectors.selectCart);
//   const expctedCart = { ...};

//   const action = actions.addProductToCart();
//   store.dispatch(action)

//   const actualCart = useSelector(selectors.selectCart);
//   expect(actualCart, expctedCart);
// }
