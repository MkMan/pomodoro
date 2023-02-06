import styled from '@emotion/styled';
import { createPolymorphicComponent, Text, TextProps } from '@mantine/core';

export const CountText = createPolymorphicComponent<'div', TextProps>(
  styled(Text)({ fontSize: '7rem' })
);
