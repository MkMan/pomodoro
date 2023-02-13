import { ActionIcon, Box, Chip, Flex, Highlight, Title } from '@mantine/core';
import React from 'react';
import { useState } from 'react';
import { FiChevronRight, FiEdit2, FiX } from 'react-icons/fi';
import { counterOrder } from 'src/constants';

import { currentCounterDisplayMap } from './constants';
import { Props } from './types';

export const CounterSelector: React.FC<Props> = ({
  currentCounterIndex,
  setCurrentCounterIndex,
  isDisabled,
  ...boxProps
}) => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const currentCounter = counterOrder[currentCounterIndex];

  const displayMode = (
    <Flex align="center" justify="center">
      <Title mr={8} order={2} size={`${24 / 16}rem`}>
        <Highlight
          highlight={currentCounterDisplayMap[currentCounter].text}
          highlightStyles={({ colors }) => ({
            color: colors[currentCounterDisplayMap[currentCounter].color],
            backgroundColor: 'transparent',
          })}
        >
          {`Current timer: ${currentCounterDisplayMap[currentCounter].text}`}
        </Highlight>
      </Title>
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
