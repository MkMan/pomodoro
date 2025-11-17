import { Heading } from '$app-components';
import { appStore } from '$app-state';
import { cx } from '$app-utils';
import { type Component, For, Show, createMemo } from 'solid-js';

import { Actions } from './actions/actions';
import * as styles from './styles.css';
import { TodoForm } from './todo-form/todo-form';
import { TodoItem } from './todo-item/todo-item';
import {
  onCreatingNewTodo,
  onDeletingAllTodos,
  onDeletingCompletedTodos,
  onTodoDelete,
  onTodoDescriptionChange,
  onTodoMove,
  onTodoStatusChange,
} from './utils';

const Todos: Component = () => {
  const hasTodos = createMemo(
    () => !!appStore.todos.length && appStore.todos.length > 0,
  );
  const hasCompletedTodos = createMemo(() =>
    appStore.todos.some(({ status }) => status === 'completed'),
  );

  return (
    <section class={styles.wrapper}>
      <div class={styles.header}>
        <Heading class={styles.heading} level={2}>
          Todos
        </Heading>
        <Actions
          onDeletingAllTodos={onDeletingAllTodos}
          onDeletingCompletedTodos={onDeletingCompletedTodos}
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
              isFirstItem={index() === 0}
              isLastItem={index() === appStore.todos.length - 1}
              onDelete={onTodoDelete(index())}
              onDescriptionChange={onTodoDescriptionChange(index())}
              onMoveDown={() => onTodoMove(index(), 'down')}
              onMoveUp={() => onTodoMove(index(), 'up')}
              onStatusChange={onTodoStatusChange(index())}
            />
          )}
        </For>
      </ul>
      <Show when={appStore.todos.length > 0}>
        <hr class={styles.separator} />
      </Show>

      <div class={cx(appStore.todos.length > 0 && styles.newTodo)}>
        <TodoForm onSubmit={onCreatingNewTodo} />
      </div>
    </section>
  );
};

export { Todos };
