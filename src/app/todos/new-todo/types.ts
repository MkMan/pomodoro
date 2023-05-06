import { Todo } from '$app-state';

type NewTodoProps = {
  class?: string;
  onCreate?: (newTodo: Todo) => void;
};

export type { NewTodoProps };
