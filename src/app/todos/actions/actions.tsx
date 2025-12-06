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
        class={iconButton}
        onClick={props.onDeletingCompletedTodos}
        title="remove completed todos"
      >
        <TbEraser size={30} />
      </IconButton>
    </Show>
    <Show when={props.shouldShowDeleteAllTodosButton}>
      <IconButton
        class={iconButton}
        onClick={props.onDeletingAllTodos}
        title="delete all todos"
      >
        <TbTrash size={30} />
      </IconButton>
    </Show>
  </>
);

export { Actions };
