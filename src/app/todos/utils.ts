import { DragEventHandler, Id } from '@thisbeyond/solid-dnd';
import { Accessor, createMemo, createSignal } from 'solid-js';

import { appStore, setAppStore, Todo } from '$app-state';

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

const onDragEnd: (todoIds: Accessor<string[]>) => DragEventHandler =
  (todoIds) =>
  ({ draggable, droppable }) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!droppable || !draggable) return;

    const fromIndex = todoIds().indexOf(draggable.id.toString());
    const toIndex = todoIds().indexOf(droppable.id.toString());

    if (fromIndex === toIndex) return;

    const newTodos = [...appStore.todos];
    const movedItem = newTodos.splice(fromIndex, 1)[0];
    newTodos.splice(toIndex, 0, movedItem);

    setAppStore('todos', newTodos);
  };

const handleDragOverlay = (): {
  onDragStart: DragEventHandler;
  draggedTodo: Accessor<Todo | undefined>;
} => {
  const [draggedId, setDraggedId] = createSignal<Id>();
  const draggedTodo = createMemo(() =>
    appStore.todos.find(({ id }) => id === draggedId())
  );

  return {
    onDragStart: ({ draggable: { id } }) => setDraggedId(id),
    draggedTodo,
  };
};

export {
  handleDragOverlay,
  onCreatingNewTodo,
  onDeletingAllTodos,
  onDeletingCompletedTodos,
  onDragEnd,
  onTodoDelete,
  onTodoDescriptionChange,
  onTodoStatusChange,
};
