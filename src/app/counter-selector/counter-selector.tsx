import { Component, createSignal } from 'solid-js';

import { ButtonIcon, Heading, Icon } from '$app-components';
import {
  currentCounterIndex,
  getCurrentCounter,
  setCurrentCounterIndex,
} from '$app-state';
import { withDefaultProps } from '$app-utils';

import { counterOrder } from '../../constants';
import { Chip, Chips } from './chips/chips';
import { currentCounterDisplayMap } from './constants';
import * as styles from './styles';
import { CounterSelectorProps } from './types';

const CounterSelector: Component<CounterSelectorProps> = (props) => {
  const [isInEditMode, setIsInEditMode] = createSignal(false);

  if (
    currentCounterIndex() < 0 ||
    currentCounterIndex() + 1 > counterOrder.length
  ) {
    throw new Error('Invalid currentCounterIndex value');
  }

  const displayMode = (
    <div class={styles.editHeadingWrapperStyles}>
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
        onClick={() => {
          setIsInEditMode(true);
        }}
        size={30}
      />
    </div>
  );

  const editMode = (
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
              <Icon iconName="chevron-right" size={15} />
            )}
            {index === counterOrder.length - 1 && (
              <ButtonIcon
                iconName="close"
                onClick={() => {
                  setIsInEditMode(false);
                }}
                size={30}
              />
            )}
          </>
        ))
      }
    </Chips>
  );

  return (
    <div class={props.className}>{isInEditMode() ? editMode : displayMode}</div>
  );
};

const CounterSelectorWithDefaultProps = withDefaultProps(CounterSelector);

export { CounterSelectorWithDefaultProps as CounterSelector };
