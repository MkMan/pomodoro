import { Component, createMemo, createSignal, For } from 'solid-js';

import { Button, Heading } from '$app-components';
import { appStore, setAppStore, Todo } from '$app-state';
import { cx } from '$app-utils';

import { Actions } from './actions/actions';
import { NewTodo } from './new-todo/new-todo';
import * as styles from './styles';
import { TodoItem } from './todo-item/todo-item';

const Todos: Component = () => {
  const [isNewTodoFormOpen, setIsNewTodoFormOpen] = createSignal(false);
  const toggleNewTodoForm = () => setIsNewTodoFormOpen(!isNewTodoFormOpen());

  const hasTodos = createMemo(
    () => !!appStore.todos?.length && appStore.todos?.length > 0
  );
  const hasCompletedTodos = createMemo(
    () => appStore.todos?.some(({ status }) => status === 'completed') ?? false
  );

  const onCreatingNewTodo = (newTodo: Todo) => {
    setAppStore('todos', (currentTodos) => [...currentTodos, newTodo]);
    setIsNewTodoFormOpen(false);
  };
  const onDeletingCompletedTodos = () => {
    setAppStore(
      'todos',
      appStore.todos.filter(({ status }) => status !== 'completed')
    );
  };
  const onDeletingAllTodos = () => setAppStore('todos', []);

  const onTodoStatusChange =
    (todoIndex: number) => (newStatus: Todo['status']) => {
      setAppStore('todos', todoIndex, 'status', newStatus);
    };
  const onTodoDelete = (indexToRemove: number) => () => {
    const todosCopy = [...appStore.todos];
    todosCopy.splice(indexToRemove, 1);
    setAppStore('todos', todosCopy);
  };

  return (
    <section class={styles.wrapper}>
      <div class={styles.header}>
        <Heading class={styles.heading} level={2}>
          Todos
        </Heading>
        <Actions
          onDeletingCompletedTodos={onDeletingCompletedTodos}
          onDeletingAllTodos={onDeletingAllTodos}
          shouldShowDeleteAllTodosButton={hasTodos()}
          shouldShowDeleteCompletedTodosButton={hasCompletedTodos()}
        />
      </div>
      <For each={appStore.todos}>
        {(todo, index) => (
          <>
            <TodoItem
              {...todo}
              class={styles.listItem}
              onStatusChange={onTodoStatusChange(index())}
              onDelete={onTodoDelete(index())}
            />
            <div class={styles.separator} />
          </>
        )}
      </For>
      <div class={cx(appStore.todos.length > 0 && styles.newTodo)}>
        {isNewTodoFormOpen() ? (
          <NewTodo
            class={styles.listItem}
            onClose={toggleNewTodoForm}
            onCreate={onCreatingNewTodo}
          />
        ) : (
          <Button
            class={styles.createTodoCta}
            onClick={toggleNewTodoForm}
            size="small"
          >
            Create a todo
          </Button>
        )}
      </div>
    </section>
  );
};

export { Todos };
