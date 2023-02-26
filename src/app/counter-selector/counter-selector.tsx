import { Component, createSignal, Show } from 'solid-js';

import { ButtonIcon, Heading, Icon } from '$app-components';
import {
  currentCounterIndex,
  getCurrentCounter,
  setCurrentCounterIndex,
} from '$app-state';
import { cx, withDefaultProps } from '$app-utils';

import { counterOrder } from '../../constants';
import { Chip, Chips } from './chips/chips';
import { currentCounterDisplayMap } from './constants';
import * as styles from './styles';
import { CounterSelectorProps, DisplayModeProps, EditModeProps } from './types';

const EditMode: Component<EditModeProps> = (props) => (
  <Chips onChange={setCurrentCounterIndex}>
    {(inputProps) =>
      counterOrder.map((counter, index) => (
        <>
          <Chip
            colour={currentCounterDisplayMap[counter].color}
            isChecked={index === currentCounterIndex()}
            isEnabled={!props.isDisabled}
            value={index}
            {...inputProps}
          >
            {currentCounterDisplayMap[counter].text}
          </Chip>
          {index < counterOrder.length - 1 && (
            <Icon class={styles.chevron} iconName="chevron-right" size={15} />
          )}
        </>
      ))
    }
  </Chips>
);

const DisplayMode: Component<DisplayModeProps> = (props) => (
  <div class={styles.editHeadingWrapper}>
    <Heading level={2} mr={8}>
      Current timer:
      <span
        style={{ color: currentCounterDisplayMap[getCurrentCounter()].color }}
      >
        {` ${currentCounterDisplayMap[getCurrentCounter()].text}`}
      </span>
    </Heading>
    <ButtonIcon
      aria-label="edit counter type"
      iconName="pencil"
      onClick={props.onEditClick}
      size={30}
    />
  </div>
);

const CounterSelector: Component<CounterSelectorProps> = (props) => {
  const [isInEditMode, setIsInEditMode] = createSignal(false);

  if (
    currentCounterIndex() < 0 ||
    currentCounterIndex() + 1 > counterOrder.length
  ) {
    throw new Error('Invalid currentCounterIndex value');
  }

  return (
    <div class={cx(props.className, styles.wrapper)}>
      <Show
        when={isInEditMode()}
        fallback={<DisplayMode onEditClick={() => setIsInEditMode(true)} />}
      >
        <>
          <EditMode isDisabled={props.isDisabled} />
          <ButtonIcon
            iconName="close"
            onClick={() => {
              setIsInEditMode(false);
            }}
            size={30}
          />
        </>
      </Show>
    </div>
  );
};

const CounterSelectorWithDefaultProps = withDefaultProps(CounterSelector);

export { CounterSelectorWithDefaultProps as CounterSelector };
