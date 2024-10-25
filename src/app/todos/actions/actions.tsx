import { IconButton } from '$app-components';
import { AiOutlineClear } from 'solid-icons/ai';
import { FiTrash } from 'solid-icons/fi';
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
        <AiOutlineClear size={30} />
      </IconButton>
    </Show>
    <Show when={props.shouldShowDeleteAllTodosButton}>
      <IconButton
        class={iconButton}
        onClick={props.onDeletingAllTodos}
        title="delete all todos"
      >
        <FiTrash size={30} />
      </IconButton>
    </Show>
  </>
);

export { Actions };
