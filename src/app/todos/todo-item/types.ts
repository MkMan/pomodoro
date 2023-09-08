import { JSX } from 'solid-js';

import { Todo } from '$app-state';

type TodoItemProps = Todo & {
  class?: string;
  onDelete: () => void;
  onDescriptionChange: (description: Todo['description']) => void;
  onStatusChange: (status: Todo['status']) => void;
} & JSX.HTMLAttributes<HTMLLIElement>;

type Mode = 'edit' | 'display';

export type { Mode, TodoItemProps };
