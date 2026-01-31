import { IconButton } from '$app-components';
import { TbEraser } from 'solid-icons/tb';
import { TbTrash } from 'solid-icons/tb';
import { type Component, Show } from 'solid-js';

import { iconButton } from './styles.css';

type Props = {
  onDeletingAllTodos: () => void;
  onDeletingCompletedTodos: () => void;
  shouldShowDeleteAllTodosButton: boolean;
  shouldShowDeleteCompletedTodosButton: boolean;
};

const Actions: Component<Props> = (props) => (
  <>
    <Show when={props.shouldShowDeleteCompletedTodosButton}>
      <IconButton
        aria-label="remove completed todos"
        class={iconButton}
        onClick={props.onDeletingCompletedTodos}
      >
        <TbEraser size={30} />
      </IconButton>
    </Show>
    <Show when={props.shouldShowDeleteAllTodosButton}>
      <IconButton
        aria-label="delete all todos"
        class={iconButton}
        onClick={props.onDeletingAllTodos}
      >
        <TbTrash size={30} />
      </IconButton>
    </Show>
  </>
);

export { Actions };
