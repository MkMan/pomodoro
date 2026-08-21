import { Checkbox, IconButton, Input } from '$app-components';
import { cx } from '$app-utils';
import { createDraggable, createSortable } from '@thisbeyond/solid-dnd';
import { TbCheck, TbEdit, TbGripVertical, TbX } from 'solid-icons/tb';
import {
  type Component,
  createEffect,
  createMemo,
  createSignal,
  Match,
  splitProps,
  Switch,
} from 'solid-js';

import type { Mode, TodoItemProps } from './types';

import * as styles from './styles.css';
import { getRandomStrikethroughStyle } from './utils';

const ViewMode: Component<{
  description: string;
  id: string;
  isChecked: boolean;
  onCheck: () => void;
  onDeleteClick: () => void;
  onEditClick: () => void;
}> = (props) => (
  <>
    <Checkbox
      checked={props.isChecked}
      id={props.id}
      onChange={props.onCheck}
    />
    <label
      class={cx(styles.description, props.isChecked && 'isCompleted')}
      for={props.id}
      style={{ 'text-decoration-style': getRandomStrikethroughStyle() }}
    >
      {props.description}
    </label>
    <IconButton aria-label="Edit" onClick={props.onEditClick}>
      <TbEdit size={25} />
    </IconButton>
    <IconButton aria-label="Delete" onClick={props.onDeleteClick}>
      <TbX size={25} />
    </IconButton>
  </>
);

const EditMode: Component<{
  description: string;
  onSave: (newDescription: string) => void;
}> = (props) => {
  // oxlint-disable-next-line solid/reactivity -- won't change post mount
  const [newDescription, setNewDescription] = createSignal(props.description);
  // oxlint-disable-next-line no-unassigned-vars -- assigned in JSX
  let inputElement: HTMLInputElement | undefined;

  createEffect(() => {
    inputElement?.focus();
  });

  return (
    <form class={styles.editWrapper}>
      <Input
        class={styles.descriptionTextfield}
        onInput={({ currentTarget }) => setNewDescription(currentTarget.value)}
        ref={inputElement}
        value={newDescription()}
      />
      <IconButton
        aria-label="Save"
        onClick={(event) => {
          event.preventDefault();
          props.onSave(newDescription());
        }}
        type="submit"
      >
        <TbCheck size={25} />
      </IconButton>
    </form>
  );
};

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

  // oxlint-disable-next-line no-unused-vars  solid/reactivity-- used in JSX
  const sortable = createSortable(props.id);
  // oxlint-disable-next-line solid/reactivity
  const draggable = createDraggable(props.id);

  const [displayMode, setDisplayMode] = createSignal<Mode>('display');

  const isCompleted = createMemo(() => props.status === 'completed');
  const onCheckClick = () =>
    props.onStatusChange(isCompleted() ? 'not-started' : 'completed');

  return (
    <li
      class={cx(props.class, styles.wrapper)}
      ref={draggable.ref}
      {...liProps}
      use:sortable
    >
      <span class={styles.dragHandle} {...draggable.dragActivators}>
        <TbGripVertical size={16} />
      </span>
      <Switch fallback={null}>
        <Match when={displayMode() === 'display'}>
          <ViewMode
            description={props.description}
            id={props.id}
            isChecked={isCompleted()}
            onCheck={onCheckClick}
            onDeleteClick={props.onDelete}
            onEditClick={() => setDisplayMode('edit')}
          />
        </Match>
        <Match when={displayMode() === 'edit'}>
          <EditMode
            description={props.description}
            onSave={(newDescription) => {
              props.onDescriptionChange(newDescription);
              setDisplayMode('display');
            }}
          />
        </Match>
      </Switch>
    </li>
  );
};

export { TodoItem };
