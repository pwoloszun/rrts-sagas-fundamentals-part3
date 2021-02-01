import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MyList from '../../../../components/MyList';
import styles from './index.module.css';

import { selectors, actions } from '../../../../store/24c-todosWithSaga'

import { statusesMapFor } from '../../../../components/MyList/item-status';
import MyTodoForm from '../../../../components/MyTodoForm';
import { Todo, TodoParams } from '../../../../api/models/todo.model';

interface EntityIdBoolMap {
  [id: number]: boolean;
}

export default function NormalizedTodoListUsingSaga() {
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
