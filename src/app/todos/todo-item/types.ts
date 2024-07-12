import { Todo } from '$app-state';
import { JSX } from 'solid-js';

type TodoItemProps = {
  class?: string;
  onDelete: () => void;
  onDescriptionChange: (description: Todo['description']) => void;
  onStatusChange: (status: Todo['status']) => void;
} & JSX.HTMLAttributes<HTMLLIElement> &
  Todo;

type Mode = 'display' | 'edit';

export type { Mode, TodoItemProps };
