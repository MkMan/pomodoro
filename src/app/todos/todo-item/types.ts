import { Todo } from '$app-state';
import { JSX } from 'solid-js';

type TodoItemProps = Todo & {
  class?: string;
  onDelete: () => void;
  onDescriptionChange: (description: Todo['description']) => void;
  onStatusChange: (status: Todo['status']) => void;
} & JSX.HTMLAttributes<HTMLLIElement>;

type Mode = 'display' | 'edit';

export type { Mode, TodoItemProps };
