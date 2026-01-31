import type { Todo } from '$app-state';
import type { JSX } from 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface DirectiveFunctions {
      // biome-ignore lint/suspicious/noExplicitAny: unable to type properly
      sortable?: any;
    }
  }
}

type TodoItemProps = {
  onDelete: () => void;
  onDescriptionChange: (description: Todo['description']) => void;
  onStatusChange: (status: Todo['status']) => void;
} & JSX.HTMLAttributes<HTMLLIElement> &
  Todo;

type Mode = 'display' | 'edit';

export type { Mode, TodoItemProps };
