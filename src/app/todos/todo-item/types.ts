import type { Todo } from '$app-state';
import type { JSX } from 'solid-js';

type TodoItemProps = {
  class?: string;
  isFirstItem?: boolean;
  isLastItem?: boolean;
  onDelete: () => void;
  onDescriptionChange: (description: Todo['description']) => void;
  onMoveDown: () => void;
  onMoveUp: () => void;
  onStatusChange: (status: Todo['status']) => void;
} & JSX.HTMLAttributes<HTMLLIElement> &
  Todo;

type Mode = 'display' | 'edit';

export type { Mode, TodoItemProps };
