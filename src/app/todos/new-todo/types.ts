import { Todo } from '$app-state';

type NewTodoProps = {
  class?: string;
  onClose?: () => void;
  onCreate?: (newTodo: Todo) => void;
};

export type { NewTodoProps };
