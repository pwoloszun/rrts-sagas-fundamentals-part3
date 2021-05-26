interface Todo {
  id: number;
  title: string;
  description?: string;
}

enum TodoStatus {
  IS_EDITING = 'IS_EDITING',
  IS_SAVING = 'IS_SAVING',
  IS_REMOVING = 'IS_REMOVING',
  PERSISTED = 'PERSISTED' // default value
}

// data fetched from API
const todosData = [
  { id: 100, title: 'buy milk', isImportant: true },
  { id: 200, title: 'walk the dog', description: 'important' },
  { id: 300, title: 'do them math', },
  { id: 400, title: 'do smth else', },
  { id: 500, title: 'another task', },
];


// TODO: designing state shape (state slice shape)
const stateSlice = {
};


// ======
// client code(ReactComponent) - TODO
