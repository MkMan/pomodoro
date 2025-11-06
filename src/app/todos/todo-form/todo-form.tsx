import { IconButton, Input } from '$app-components';
import { TbPlus } from 'solid-icons/tb';
import { type Component, createEffect, createSignal } from 'solid-js';

import type { TodoFormProps } from './types';

import * as styles from './styles.css';

const initialDescription = '';
const newTodoFieldLabel = 'New todo description';

const TodoForm: Component<TodoFormProps> = (props) => {
  let descriptionRef: HTMLInputElement | undefined;

  const [description, setDescription] = createSignal(initialDescription);

  const onSubmit = (event: Event) => {
    event.preventDefault();

    if (description().trim().length === 0) {
      return;
    }

    props.onSubmit?.(description());

    // reset inputs
    setDescription(initialDescription);
  };

  createEffect(() => {
    descriptionRef?.focus();
  });

  return (
    <form class={props.class} name="new todo details" onSubmit={onSubmit}>
      <div class={styles.formLayout}>
        <Input
          aria-label={newTodoFieldLabel}
          class={styles.inputForm}
          name="new-todo-description"
          onInput={({ currentTarget }) => setDescription(currentTarget.value)}
          placeholder={newTodoFieldLabel}
          ref={descriptionRef}
          value={description()}
        />
        <IconButton aria-label="create todo" type="submit">
          <TbPlus size={25} />
        </IconButton>
      </div>
    </form>
  );
};

export { TodoForm };
