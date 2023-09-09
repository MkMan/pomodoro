import { cx } from '$app-utils';
import { FiChevronDown } from 'solid-icons/fi';
import { Component, createEffect, createSignal } from 'solid-js';

import { Heading } from '../heading/heading';
import { UnstyledButton } from '../unstyled-button/unstyled-button';
import * as styles from './styles.css';
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
          class={cx(styles.heading, isOpen() && 'isOpen')}
          onClick={toggle}
        >
          {props.label}
          <FiChevronDown
            class={cx(styles.headingIcon, isOpen() && 'isOpen')}
            size={20}
          />
        </UnstyledButton>
      </Heading>
      <div
        aria-hidden={!isOpen()}
        class={cx(styles.content, isOpen() && 'isOpen')}
        id={contentDivId(props.label)}
      >
        <div>{props.content}</div>
      </div>
    </section>
  );
};
