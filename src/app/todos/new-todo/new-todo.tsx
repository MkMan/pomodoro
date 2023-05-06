import { FiPlus } from 'solid-icons/fi';
import { Component, createSignal } from 'solid-js';

import { IconButton, Input, Select } from '$app-components';
import { TodoFrequency } from '$app-state';
import { cx } from '$app-utils';

import * as styles from './styles';
import { NewTodoProps } from './types';

const initialDescription = '';
const initialFrequency: TodoFrequency = 'once';

const NewTodo: Component<NewTodoProps> = (props) => {
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

  return (
    <form class={cx(props.class, styles.wrapper)} onSubmit={onSubmit}>
      <Input
        class={styles.description}
        placeholder="New todo description"
        title="New todo description"
        value={description()}
        onInput={({ currentTarget }) => setDescription(currentTarget.value)}
      />
      <Select
        title="Frequency"
        options={[
          { label: 'Once', value: initialFrequency },
          { label: 'Daily', value: 'daily' },
        ]}
        value={frequency()}
        onChange={({ currentTarget }) =>
          setFrequency(currentTarget.value as TodoFrequency)
        }
      />
      <IconButton type="submit" title="Create">
        <FiPlus size={30} />
      </IconButton>
    </form>
  );
};

export { NewTodo };
