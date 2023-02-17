import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { createPolymorphicComponent, Text, TextProps } from '@mantine/core';

export const CountText = createPolymorphicComponent<'div', TextProps>(
  styled(Text)({ fontSize: '7rem' })
);

export const buttonsContainerStyles = css({
  display: 'flex',
  gap: 20,
  justifyContent: 'center',
});
