import { Button, Heading } from '$app-components';
import { appStore } from '$app-state';
import { cx } from '$app-utils';
import {
  DragDropProvider,
  DragDropSensors,
  DragOverlay,
  SortableProvider,
  closestCenter,
} from '@thisbeyond/solid-dnd';
import { Component, For, createMemo, createSignal } from 'solid-js';

import { Actions } from './actions/actions';
import * as styles from './styles.css';
import { TodoForm } from './todo-form/todo-form';
import { TodoItem } from './todo-item/todo-item';
import {
  handleDragOverlay,
  onCreatingNewTodo,
  onDeletingAllTodos,
  onDeletingCompletedTodos,
  onDragEnd,
  onTodoDelete,
  onTodoDescriptionChange,
  onTodoStatusChange,
} from './utils';

const Todos: Component = () => {
  const [isNewTodoFormOpen, setIsNewTodoFormOpen] = createSignal(false);
  const toggleNewTodoForm = () => setIsNewTodoFormOpen(!isNewTodoFormOpen());

  const { draggedTodo, onDragStart } = handleDragOverlay();

  const hasTodos = createMemo(
    () => !!appStore.todos.length && appStore.todos.length > 0
  );
  const hasCompletedTodos = createMemo(() =>
    appStore.todos.some(({ status }) => status === 'completed')
  );
  const todoIds = createMemo(() => appStore.todos.map(({ id }) => id));

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
      {/* TODO: move out to a component */}
      <DragDropProvider
        collisionDetector={closestCenter}
        onDragEnd={onDragEnd(todoIds)}
        onDragStart={onDragStart}
      >
        <DragDropSensors />
        <ul class={styles.list}>
          <SortableProvider ids={todoIds()}>
            <For each={appStore.todos}>
              {(todo, index) => (
                <TodoItem
                  {...todo}
                  class={styles.listItem}
                  data-testid="todo-item"
                  onDelete={onTodoDelete(index())}
                  onDescriptionChange={onTodoDescriptionChange(index())}
                  onStatusChange={onTodoStatusChange(index())}
                />
              )}
            </For>
          </SortableProvider>
        </ul>
        <DragOverlay>
          {draggedTodo() && (
            <div class={styles.draggedItem}>{draggedTodo()?.description}</div>
          )}
        </DragOverlay>
      </DragDropProvider>

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
