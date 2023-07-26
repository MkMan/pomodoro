import { AiOutlineClear } from 'solid-icons/ai';
import { FiTrash } from 'solid-icons/fi';
import { Component, Show } from 'solid-js';

import { IconButton } from '$app-components';

import { iconButton } from './styles.css';

type Props = {
  onDeletingAllTodos: () => void;
  onDeletingCompletedTodos: () => void;
  shouldShowDeleteCompletedTodosButton: boolean;
  shouldShowDeleteAllTodosButton: boolean;
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
