import { FiX } from 'solid-icons/fi';
import { Component, createMemo } from 'solid-js';

import { IconButton } from '$app-components';
import { cx } from '$app-utils';

import * as styles from './styles';
import { TodoItemProps } from './types';

const TodoItem: Component<TodoItemProps> = (props) => {
  const isCompleted = createMemo(() => props.status === 'completed');

  const onCheckClick = () =>
    props.onStatusChange(isCompleted() ? 'not-started' : 'completed');

  return (
    <div class={cx(props.class, styles.wrapper)}>
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
      <IconButton onClick={props.onDelete} title="Delete">
        <FiX size={25} />
      </IconButton>
    </div>
  );
};

export { TodoItem };
