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

type Mode = 'display' | 'edit';

type TodoItemProps = {
  onDelete: () => void;
  onDescriptionChange: (description: Todo['description']) => void;
  onStatusChange: (status: Todo['status']) => void;
} & JSX.HTMLAttributes<HTMLLIElement> &
  Todo;

export type { Mode, TodoItemProps };
