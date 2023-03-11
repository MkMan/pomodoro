import { FiChevronDown } from 'solid-icons/fi';
import { Component, createEffect, createSignal, Show } from 'solid-js';

import { Heading } from '../heading/heading';
import { UnstyledButton } from '../unstyled-button/unstyled-button';
import * as styles from './styles';
import { CollapseProps } from './types';

const defaultHeadingLevel = 2;
const contentDivId = (label: string) => `collapse-content-${label}`;

export const Collapse: Component<CollapseProps> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  createEffect(() => {
    setIsOpen(!!props.isOpen);
  });

  return (
    <section class={styles.wrapper}>
      <Heading level={props.headingLevel ?? defaultHeadingLevel}>
        <UnstyledButton
          aria-controls={contentDivId(props.label)}
          aria-expanded={!isOpen()}
          class={styles.heading}
          onClick={toggle}
        >
          {props.label}
          <FiChevronDown
            class={styles.headingIcon}
            classList={{ isOpen: isOpen() }}
            size={20}
          />
        </UnstyledButton>
      </Heading>
      <div class={styles.content} id={contentDivId(props.label)}>
        <Show when={isOpen()}>
          <div>{props.content}</div>
        </Show>
      </div>
    </section>
  );
};
