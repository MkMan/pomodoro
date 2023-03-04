import { FiEdit3, FiX } from 'solid-icons/fi';
import { Component, createMemo, createSignal } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Select, UnstyledButton } from '$app-components';
import {
  counterState,
  currentCounterIndex,
  getCurrentCounter,
  setCurrentCounterIndex,
} from '$app-state';
import { cx, withDefaultProps } from '$app-utils';

import { counterOrder } from '../../constants';
import { currentCounterDisplayMap } from './constants';
import * as styles from './styles';
import { CounterSelectorProps } from './types';

const selectId = 'counter-select';

const CounterSelector: Component<CounterSelectorProps> = (props) => {
  const [isInEditMode, setIsInEditMode] = createSignal(false);

  const toggleMode = () => setIsInEditMode((isInEditMode) => !isInEditMode);
  const selectOptions = createMemo(() =>
    counterOrder.map((counter, index) => ({
      label: `${index + 1}. ${currentCounterDisplayMap[counter].text}`,
      value: index.toString(),
    }))
  );

  if (
    currentCounterIndex() < 0 ||
    currentCounterIndex() + 1 > counterOrder.length
  ) {
    throw new Error('Invalid currentCounterIndex value');
  }

  return (
    <div class={cx(props.className, styles.wrapper)}>
      <Dynamic
        class={styles.label}
        component={isInEditMode() ? 'label' : 'span'}
        for={isInEditMode() ? selectId : undefined}
      >
        Current timer:
      </Dynamic>
      {isInEditMode() ? (
        <Select
          id={selectId}
          disabled={counterState() !== 'stopped'}
          value={currentCounterIndex().toString()}
          onChange={({ currentTarget }) => {
            setCurrentCounterIndex(parseInt(currentTarget.value));
          }}
          options={selectOptions()}
        />
      ) : (
        <span
          class={styles.label}
          style={{
            color: currentCounterDisplayMap[getCurrentCounter()].color,
          }}
        >
          {` ${currentCounterDisplayMap[getCurrentCounter()].text}`}
        </span>
      )}
      <UnstyledButton
        aria-label={
          isInEditMode() ? 'close counter editing' : 'edit counter type'
        }
        onClick={toggleMode}
      >
        {isInEditMode() ? <FiX size={30} /> : <FiEdit3 size={30} />}
      </UnstyledButton>
    </div>
  );
};

const CounterSelectorWithDefaultProps = withDefaultProps(CounterSelector);

export { CounterSelectorWithDefaultProps as CounterSelector };
