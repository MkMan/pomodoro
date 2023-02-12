import { ActionIcon, Box, Chip, Flex, Title } from '@mantine/core';
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
      <Title
        color={currentCounterDisplayMap[currentCounter].color}
        mr={32}
        order={2}
        size={`${24 / 16}rem`}
      >
        {currentCounterDisplayMap[currentCounter].text}
      </Title>
      <ActionIcon
        aria-label="edit counter type"
        color="blue"
        onClick={() => {
          setIsInEditMode(true);
        }}
        size={30}
      >
        <FiEdit2 size={30} />
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
          <Chip disabled={isDisabled} value={index.toString()}>
            {currentCounterDisplayMap[counter].text}
          </Chip>
          {index < counterOrder.length - 1 && <FiChevronRight />}
        </React.Fragment>
      ))}
      <ActionIcon
        color="blue"
        onClick={() => {
          setIsInEditMode(false);
        }}
        size={30}
      >
        <FiX size={30} />
      </ActionIcon>
    </Chip.Group>
  );

  return <Box {...boxProps}>{isInEditMode ? editMode : displayMode}</Box>;
};
