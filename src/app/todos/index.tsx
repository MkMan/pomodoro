import { Component, createMemo, createSignal, For } from 'solid-js';

import { Button, Heading } from '$app-components';
import { appStore } from '$app-state';
import { cx } from '$app-utils';

import { Actions } from './actions/actions';
import * as styles from './styles';
import { TodoForm } from './todo-form/todo-form';
import { TodoItem } from './todo-item/todo-item';
import {
  onCreatingNewTodo,
  onDeletingAllTodos,
  onDeletingCompletedTodos,
  onTodoDelete,
  onTodoStatusChange,
} from './utils';

const Todos: Component = () => {
  const [isNewTodoFormOpen, setIsNewTodoFormOpen] = createSignal(false);
  const toggleNewTodoForm = () => setIsNewTodoFormOpen(!isNewTodoFormOpen());

  const hasTodos = createMemo(
    () => !!appStore.todos.length && appStore.todos.length > 0
  );
  const hasCompletedTodos = createMemo(() =>
    appStore.todos.some(({ status }) => status === 'completed')
  );

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
      <ul class={styles.list}>
        <For each={appStore.todos}>
          {(todo, index) => (
            <TodoItem
              {...todo}
              class={styles.listItem}
              data-testid="todo-item"
              onStatusChange={onTodoStatusChange(index())}
              onDelete={onTodoDelete(index())}
            />
          )}
        </For>
      </ul>

      <div class={cx(appStore.todos.length > 0 && styles.newTodo)}>
        {isNewTodoFormOpen() ? (
          <TodoForm onClose={toggleNewTodoForm} onSubmit={onCreatingNewTodo} />
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
