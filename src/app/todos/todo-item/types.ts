import { Todo } from '$app-state';

type TodoItemProps = Pick<Todo, 'description' | 'status'> & {
  class?: string;
  'data-testid'?: string;
  onStatusChange: (status: Todo['status']) => void;
  onDelete: () => void;
};

export type { TodoItemProps };
