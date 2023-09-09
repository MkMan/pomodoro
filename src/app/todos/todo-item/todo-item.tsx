import { createSortable } from '@thisbeyond/solid-dnd';
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
    'id',
    'onDelete',
    'onDescriptionChange',
    'onStatusChange',
    'status',
  ]);
  let descriptionTextfield: HTMLInputElement | undefined;

  // eslint-disable-next-line solid/reactivity -- as per the docs
  const sortable = createSortable(props.id);

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
    <li
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- unable to declare types for the directive
      // @ts-expect-error
      use:sortable
      class={cx(
        props.class,
        styles.wrapper,
        sortable.isActiveDraggable && styles.hasReducedOpacityClassName
      )}
      title={props.description}
      {...liProps}
    >
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
        <form class={styles.editWrapper}>
          <Input
            class={styles.descriptionTextfield}
            value={props.description}
            ref={descriptionTextfield}
            onInput={({ currentTarget }) =>
              setNewDescription(currentTarget.value)
            }
          />
          <IconButton
            type="submit"
            onClick={(event) => {
              event.preventDefault();

              props.onDescriptionChange(newDescription());
              setDisplayMode('display');
            }}
            title="Save"
          >
            <FiCheck size={25} />
          </IconButton>
        </form>
      )}
    </li>
  );
};

export { TodoItem };
