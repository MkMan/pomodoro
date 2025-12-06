import { Checkbox, IconButton, Input } from '$app-components';
import { cx } from '$app-utils';
import {
  TbCheck,
  TbChevronDown,
  TbChevronUp,
  TbEdit,
  TbX,
} from 'solid-icons/tb';
import {
  type Component,
  Show,
  createEffect,
  createMemo,
  createSignal,
  splitProps,
} from 'solid-js';

import type { Mode, TodoItemProps } from './types';

import * as styles from './styles.css';
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
    'onMoveDown',
    'onMoveUp',
    'isLastItem',
    'isFirstItem',
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
    <li
      class={cx(props.class, styles.wrapper)}
      title={props.description}
      {...liProps}
    >
      {displayMode() === 'display' && (
        <>
          <Checkbox
            checked={isCompleted()}
            id={props.description}
            onChange={onCheckClick}
          />
          <label
            class={cx(styles.description, isCompleted() && 'isCompleted')}
            for={props.description}
            style={{ 'text-decoration-style': getRandomStrikethroughStyle() }}
          >
            {props.description}
          </label>

          <Show when={!props.isLastItem}>
            <IconButton onClick={props.onMoveDown}>
              <TbChevronDown size={25} />
            </IconButton>
          </Show>
          <Show when={!props.isFirstItem}>
            <IconButton onClick={props.onMoveUp}>
              <TbChevronUp size={25} />
            </IconButton>
          </Show>
          <IconButton onClick={() => setDisplayMode('edit')} title="Edit">
            <TbEdit size={25} />
          </IconButton>
          <IconButton onClick={props.onDelete} title="Delete">
            <TbX size={25} />
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
            <TbCheck size={25} />
          </IconButton>
        </form>
      )}
    </li>
  );
};

export { TodoItem };
