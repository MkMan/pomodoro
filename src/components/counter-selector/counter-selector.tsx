import { ActionIcon } from '@mantine/core';
import React from 'react';
import { useState } from 'react';
import { FiChevronRight, FiEdit2, FiX } from 'react-icons/fi';

import { withDefaultProps } from '$app-utils';

import { counterOrder } from '../../constants';
import { Heading } from '../heading/heading';
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
      <ActionIcon
        aria-label="edit counter type"
        onClick={() => {
          setIsInEditMode(true);
        }}
        size={40}
      >
        <FiEdit2 size={25} />
      </ActionIcon>
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
            {index < counterOrder.length - 1 && <FiChevronRight />}
            {index === counterOrder.length - 1 && (
              <ActionIcon
                onClick={() => {
                  setIsInEditMode(false);
                }}
                size={40}
              >
                <FiX size={25} />
              </ActionIcon>
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
