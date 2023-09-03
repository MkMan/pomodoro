import { JSX } from 'solid-js';

import { appStore, setAppStore, Todo } from '$app-state';

import { todoDraggingClassName, todoIndexDataKey } from './constants';

type DragEventHandler = JSX.EventHandlerUnion<HTMLLIElement, DragEvent>;

const onCreatingNewTodo = (description: string) => {
  setAppStore('todos', (currentTodos) => [
    ...currentTodos,
    {
      id: globalThis.crypto.randomUUID(),
      description,
      status: 'not-started',
    },
  ]);
};

const onDeletingCompletedTodos = () => {
  setAppStore(
    'todos',
    appStore.todos.filter(({ status }) => status !== 'completed')
  );
};

const onDeletingAllTodos = () => {
  if (window.confirm('This will delete all todos. Are you sure?')) {
    setAppStore('todos', []);
  }
};

const onTodoStatusChange =
  (todoIndex: number) => (newStatus: Todo['status']) => {
    setAppStore('todos', todoIndex, 'status', newStatus);
  };

const onTodoDescriptionChange =
  (todoIndex: number) => (newDescription: Todo['description']) => {
    setAppStore('todos', todoIndex, 'description', newDescription);
  };

const onTodoDelete = (indexToRemove: number) => () => {
  const todosCopy = [...appStore.todos];
  todosCopy.splice(indexToRemove, 1);
  setAppStore('todos', todosCopy);
};

const preventDefault: DragEventHandler = (event): void =>
  event.preventDefault();

const onTodoDragStart =
  (todoIndex: number): DragEventHandler =>
  (event) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    event.dataTransfer!.dropEffect = 'move';
    event.dataTransfer?.setData(todoIndexDataKey, todoIndex.toString());

    event.target.classList.add(todoDraggingClassName);
  };

const onTodoDragEnd: DragEventHandler = (event) => {
  event.target.classList.remove(todoDraggingClassName);
};

const onTodoDrop =
  (todoIndex: number): DragEventHandler =>
  (event) => {
    preventDefault(event);

    const oldIndex = parseInt(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
      event.dataTransfer?.getData(todoIndexDataKey)!
    );

    // TODO: investigate using toSpliced
    const newTodos = [...appStore.todos];
    const movedItem = newTodos.splice(oldIndex, 1)[0];
    newTodos.splice(todoIndex, 0, movedItem);

    setAppStore('todos', newTodos);
  };

export {
  onCreatingNewTodo,
  onDeletingAllTodos,
  onDeletingCompletedTodos,
  onTodoDelete,
  onTodoDescriptionChange,
  onTodoDragEnd,
  onTodoDragStart,
  onTodoDrop,
  onTodoStatusChange,
  preventDefault,
};
