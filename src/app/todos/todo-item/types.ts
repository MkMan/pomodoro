import { JSX } from 'solid-js';

import { Todo } from '$app-state';

type TodoItemProps = Pick<Todo, 'description' | 'status'> & {
  class?: string;
  onStatusChange: (status: Todo['status']) => void;
  onDelete: () => void;
} & JSX.HTMLAttributes<HTMLLIElement>;

export type { TodoItemProps };
