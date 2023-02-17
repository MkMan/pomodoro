import { ActionIcon, Box, Chip, Flex, Highlight } from '@mantine/core';
import React from 'react';
import { useState } from 'react';
import { FiChevronRight, FiEdit2, FiX } from 'react-icons/fi';

import { counterOrder } from '../../constants';
import { Heading } from '../heading/heading';
import { currentCounterDisplayMap } from './constants';
import { Props } from './types';

export const CounterSelector: React.FC<Props> = ({
  currentCounterIndex,
  isDisabled,
  isInEditMode: isInEditModeProp = false,
  setCurrentCounterIndex,
  ...boxProps
}) => {
  const [isInEditMode, setIsInEditMode] = useState(isInEditModeProp);
  const currentCounter = counterOrder[currentCounterIndex];

  if (
    currentCounterIndex < 0 ||
    currentCounterIndex + 1 > counterOrder.length
  ) {
    throw new Error('Invalid currentCounterIndex value');
  }

  const displayMode = (
    <Flex align="center" justify="center">
      <Heading level={2} mr={8}>
        <Highlight
          highlight={currentCounterDisplayMap[currentCounter].text}
          highlightStyles={({ colors }) => ({
            color: colors[currentCounterDisplayMap[currentCounter].color],
            backgroundColor: 'transparent',
          })}
        >
          {`Current timer: ${currentCounterDisplayMap[currentCounter].text}`}
        </Highlight>
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
    </Flex>
  );

  const editMode = (
    <Chip.Group
      data-testid="counters-group"
      multiple={false}
      onChange={(value) => {
        setCurrentCounterIndex(parseInt(value));
      }}
      position="center"
      value={currentCounterIndex.toString()}
    >
      {counterOrder.map((counter, index) => (
        <React.Fragment key={index}>
          <Chip
            color={currentCounterDisplayMap[currentCounter].color}
            disabled={isDisabled}
            size={index === currentCounterIndex ? 'lg' : 'md'}
            value={index.toString()}
          >
            {currentCounterDisplayMap[counter].text}
          </Chip>
          {index < counterOrder.length - 1 && <FiChevronRight />}
        </React.Fragment>
      ))}
      <ActionIcon
        onClick={() => {
          setIsInEditMode(false);
        }}
        size={40}
      >
        <FiX size={25} />
      </ActionIcon>
    </Chip.Group>
  );

  return <Box {...boxProps}>{isInEditMode ? editMode : displayMode}</Box>;
};
