import React from 'react';
import { useState } from 'react';

import { withDefaultProps } from '$app-utils';

import { counterOrder } from '../../constants';
import { ButtonIcon } from '../button-icon/button-icon';
import { Heading } from '../heading/heading';
import { Icon } from '../icon/icon';
import { Chip, Chips } from './chips/chips';
import { currentCounterDisplayMap } from './constants';
import { editHeadingWrapperStyles } from './styled';
import { CounterSelectorProps } from './types';

const CounterSelector = ({
  className,
  currentCounterIndex,
  isDisabled,
  setCurrentCounterIndex,
}: CounterSelectorProps): JSX.Element => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const currentCounter = counterOrder[currentCounterIndex];

  if (
    currentCounterIndex < 0 ||
    currentCounterIndex + 1 > counterOrder.length
  ) {
    throw new Error('Invalid currentCounterIndex value');
  }

  const displayMode = (
    <div className={editHeadingWrapperStyles}>
      <Heading level={2} mr={8}>
        Current timer:
        <span style={{ color: currentCounterDisplayMap[currentCounter].color }}>
          {` ${currentCounterDisplayMap[currentCounter].text}`}
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
          <React.Fragment key={index}>
            <Chip
              colour={currentCounterDisplayMap[counter].color}
              isChecked={index === currentCounterIndex}
              isEnabled={!isDisabled}
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
          </React.Fragment>
        ))
      }
    </Chips>
  );

  return (
    <div className={className}>{isInEditMode ? editMode : displayMode}</div>
  );
};

const CounterSelectorWithDefaultProps = withDefaultProps(CounterSelector);

export { CounterSelectorWithDefaultProps as CounterSelector };
