import { FiX } from 'solid-icons/fi';
import { Component, createEffect, createSignal } from 'solid-js';

import { Button, Heading, IconButton, Input } from '$app-components';

import * as styles from './styles.css';
import { TodoFormProps } from './types';

const initialDescription = '';

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
    <form name="new todo details" class={props.class} onSubmit={onSubmit}>
      <div class={styles.headingWrapper}>
        <Heading class={styles.heading} level={3}>
          New todo
        </Heading>
        <IconButton
          type="button"
          onClick={props.onClose}
          title="close new todo form"
        >
          <FiX size={25} />
        </IconButton>
      </div>
      <Input
        label="New todo description"
        value={description()}
        onInput={({ currentTarget }) => setDescription(currentTarget.value)}
        ref={descriptionRef}
      />
      <Button class={styles.createCta} size="small" type="submit">
        Create
      </Button>
    </form>
  );
};

export { TodoForm };
