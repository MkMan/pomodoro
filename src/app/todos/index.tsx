import { Heading } from '$app-components';
import { appStore } from '$app-state';
import { cx } from '$app-utils';
import {
  closestCenter,
  DragDropProvider,
  DragDropSensors,
  type DragEventHandler,
  SortableProvider,
} from '@thisbeyond/solid-dnd';
import { type Component, createMemo, For, Show } from 'solid-js';

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
  onTodoDrop,
  onTodoStatusChange,
} from './utils';

type TodosProps = {
  class?: string;
};

const Todos: Component<TodosProps> = (props) => {
  const todoIds = createMemo(() => appStore.todos.map(({ id }) => id));
  const hasTodos = createMemo(
    () => !!appStore.todos.length && appStore.todos.length > 0,
  );
  const hasCompletedTodos = createMemo(() =>
    appStore.todos.some(({ status }) => status === 'completed'),
  );

  const onDragEnd: DragEventHandler = ({ draggable, droppable }) => {
    if (!draggable || !droppable) return;

    const fromIndex = todoIds().indexOf(String(draggable.id));
    const toIndex = todoIds().indexOf(String(droppable.id));

    if (fromIndex === toIndex) return;

    onTodoDrop(fromIndex, toIndex);
  };

  return (
    <section class={props.class}>
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
      <DragDropProvider collisionDetector={closestCenter} onDragEnd={onDragEnd}>
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
      </DragDropProvider>
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
