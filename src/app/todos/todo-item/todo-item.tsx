import { IconButton, Input } from '$app-components';
import { cx } from '$app-utils';
import { createSortable, useDragDropContext } from '@thisbeyond/solid-dnd';
import { FiCheck, FiEdit3, FiX } from 'solid-icons/fi';
import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  splitProps,
} from 'solid-js';

import { classNames } from './constants';
import * as styles from './styles.css';
import { Mode, TodoItemProps } from './types';
import { getRandomStrikethroughStyle } from './utils';

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
  const state = useDragDropContext()?.[0];

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
      class={cx(
        props.class,
        styles.wrapper,
        sortable.isActiveDraggable && classNames.hasReducedOpacity,
        !!state?.active.draggable && classNames.hasTransitionTransform,
      )}
      title={props.description}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- unable to declare types for the directive
      // @ts-expect-error
      use:sortable
      {...liProps}
    >
      {displayMode() === 'display' && (
        <>
          <input
            checked={isCompleted()}
            class={styles.checkbox}
            id={props.description}
            onChange={onCheckClick}
            type="checkbox"
          />
          <label
            class={cx(styles.description, isCompleted() && 'isCompleted')}
            for={props.description}
            style={{ 'text-decoration-style': getRandomStrikethroughStyle() }}
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
            onInput={({ currentTarget }) =>
              setNewDescription(currentTarget.value)
            }
            ref={descriptionTextfield}
            value={props.description}
          />
          <IconButton
            onClick={(event) => {
              event.preventDefault();

              props.onDescriptionChange(newDescription());
              setDisplayMode('display');
            }}
            title="Save"
            type="submit"
          >
            <FiCheck size={25} />
          </IconButton>
        </form>
      )}
    </li>
  );
};

export { TodoItem };
