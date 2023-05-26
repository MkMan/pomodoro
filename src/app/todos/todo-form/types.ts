import { Todo } from '$app-state';

type UserFacingTodoFields = Omit<Todo, 'id'>;

type TodoFormProps = {
  class?: string;
  onClose?: () => void;
  onSubmit?: (newTodo: UserFacingTodoFields) => void;
};

export type { TodoFormProps };
