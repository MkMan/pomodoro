import { Todo } from '$app-state';

type NewTodoProps = {
  class?: string;
  onClose?: () => void;
  onCreate?: (newTodo: Omit<Todo, 'id'>) => void;
};

export type { NewTodoProps };
