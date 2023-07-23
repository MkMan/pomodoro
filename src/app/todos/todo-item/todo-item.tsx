import { FiCheck, FiEdit3, FiX } from 'solid-icons/fi';
import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  splitProps,
} from 'solid-js';

import { IconButton, Input } from '$app-components';
import { cx } from '$app-utils';

import * as styles from './styles.css';
import { Mode, TodoItemProps } from './types';

const TodoItem: Component<TodoItemProps> = (_props) => {
  const [props, liProps] = splitProps(_props, [
    'class',
    'description',
    'onDelete',
    'onDescriptionChange',
    'onStatusChange',
    'status',
  ]);
  let descriptionTextfield: HTMLInputElement | undefined;

  const [displayMode, setDisplayMode] = createSignal<Mode>('display');
  const [newDescription, setNewDescription] = createSignal('');

  const isCompleted = createMemo(() => props.status === 'completed');
  const onCheckClick = () =>
    props.onStatusChange(isCompleted() ? 'not-started' : 'completed');

  createEffect(() => {
    if (displayMode() === 'edit') {
      setNewDescription(props.description);
      descriptionTextfield?.focus();
    }
  });

  return (
    <li class={cx(props.class, styles.wrapper)} {...liProps}>
      {displayMode() === 'display' && (
        <>
          <input
            class={styles.checkbox}
            type="checkbox"
            id={props.description}
            checked={isCompleted()}
            onChange={onCheckClick}
          />
          <label
            class={cx(styles.description, isCompleted() && 'isCompleted')}
            for={props.description}
          >
            {props.description}
          </label>
          <IconButton onClick={() => setDisplayMode('edit')} title="Edit">
            <FiEdit3 size={25} />
          </IconButton>
          <IconButton onClick={props.onDelete} title="Delete">
            <FiX size={25} />
          </IconButton>
        </>
      )}
      {displayMode() === 'edit' && (
        <>
          <Input
            class={styles.descriptionTextfield}
            value={props.description}
            ref={descriptionTextfield}
            onInput={({ currentTarget }) =>
              setNewDescription(currentTarget.value)
            }
          />
          <IconButton
            onClick={() => {
              props.onDescriptionChange(newDescription());
              setDisplayMode('display');
            }}
            title="Save"
          >
            <FiCheck size={25} />
          </IconButton>
        </>
      )}
    </li>
  );
};

export { TodoItem };
