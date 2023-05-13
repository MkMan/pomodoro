import { FiX } from 'solid-icons/fi';
import { Component, createEffect, createSignal } from 'solid-js';

import { Button, Heading, IconButton, Input, Select } from '$app-components';
import { TodoFrequency } from '$app-state';

import * as styles from './styles';
import { NewTodoProps } from './types';

const initialDescription = '';
const initialFrequency: TodoFrequency = 'once';

const NewTodo: Component<NewTodoProps> = (props) => {
  let descriptionRef: HTMLInputElement | undefined;

  const [description, setDescription] = createSignal(initialDescription);
  const [frequency, setFrequency] =
    createSignal<TodoFrequency>(initialFrequency);

  const onSubmit = (event: Event) => {
    event.preventDefault();

    // submit values
    props.onCreate?.({
      description: description(),
      frequency: frequency(),
      status: 'not-started',
    });

    // reset inputs
    setDescription(initialDescription);
    setFrequency(initialFrequency);
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
      <div class={styles.inputsWrapper}>
        <Input
          label="New todo description"
          value={description()}
          onInput={({ currentTarget }) => setDescription(currentTarget.value)}
          ref={descriptionRef}
        />
        <div class={styles.frequencyWrapper}>
          <label for="new-todo-frequency">Frequency</label>
          <Select
            class={styles.frequency}
            id="new-todo-frequency"
            options={[
              { label: 'Once', value: initialFrequency },
              { label: 'Daily', value: 'daily' },
            ]}
            value={frequency()}
            onChange={({ currentTarget }) =>
              setFrequency(currentTarget.value as TodoFrequency)
            }
          />
        </div>
      </div>
      <Button class={styles.createCta} size="small" type="submit">
        Create
      </Button>
    </form>
  );
};

export { NewTodo };
