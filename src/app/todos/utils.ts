import { type Todo, appStore, setAppStore } from '$app-state';

const onCreatingNewTodo = (description: string) => {
  setAppStore('todos', (currentTodos) => [
    ...currentTodos,
    {
      description,
      id: globalThis.crypto.randomUUID(),
      status: 'not-started',
    },
  ]);
};

const onDeletingCompletedTodos = () => {
  setAppStore(
    'todos',
    appStore.todos.filter(({ status }) => status !== 'completed'),
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

const onTodoMove = (indexToMove: number, direction: 'down' | 'up') => {
  const todosCopy = [...appStore.todos];
  const todoToMove = todosCopy[indexToMove];
  const newIndex = direction === 'down' ? indexToMove + 1 : indexToMove - 1;

  todosCopy.splice(indexToMove, 1);
  todosCopy.splice(newIndex, 0, todoToMove);
  setAppStore('todos', todosCopy);
};

export {
  onCreatingNewTodo,
  onDeletingAllTodos,
  onDeletingCompletedTodos,
  onTodoDelete,
  onTodoDescriptionChange,
  onTodoMove,
  onTodoStatusChange,
};
