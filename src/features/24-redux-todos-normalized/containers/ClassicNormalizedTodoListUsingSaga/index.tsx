import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MyList from 'src/components/MyList';
import { statusesMapFor } from 'src/components/MyList/item-status';
import MyTodoForm from 'src/components/MyTodoForm';
import { Todo, TodoParams } from 'src/api/models/todo.model';

import { selectors, actions } from 'src/store/24d-classicTodosWithSaga'

import styles from './index.module.css';

export default function ClassicNormalizedTodoListUsingSaga() {
  const dispatch = useDispatch();

  const removeTodo = (todo: Todo) => {
    // TODO
  };
  const editTodo = (todo: Todo) => {
    // TODO
  };
  const saveEditTodo = (todo: Todo, params: TodoParams) => {
    // TODO
  };
  const cancelEditTodo = (todo: Todo) => {
    // TODO
  };
  const createTodo = (params: TodoParams) => {
    // TODO
  };

  const todos = [ // TODO
    { id: 100, title: 'first', description: 'some desc' },
    { id: 200, title: 'sec' },
    { id: 300, title: 'third', description: 'other desc' },
    { id: 400, title: 'fourth', description: 'imba!' },
  ];
  const isFetching = false; // TODO

  // feature specific state
  // TODO
  const statuses = statusesMapFor(todos, {
    removing: { 200: true },
    saving: { 400: true },
    editing: { 300: true },
  });

  useEffect(() => {
    dispatch(actions.fetchTodosRequest());
  }, [dispatch]);

  return (
    <div className={styles.todoNormalizedListCont}>
      <MyList
        isLoading={isFetching}
        items={todos}
        statuses={statuses}
        onRemove={removeTodo}
        onEdit={editTodo}
        onCancelEdit={cancelEditTodo}
        onSaveEdit={saveEditTodo}
      />
      <hr />
      <MyTodoForm
        onCreate={createTodo}
      />
    </div>
  );
};
