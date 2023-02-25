import { css } from '@emotion/css';

export const headerContentWrapper = css({
  display: 'flex',
  columnGap: 10,
  alignItems: 'center',
});

export const header = (height: string | number) =>
  css({ height, borderBottom: '1px solid lightgrey' });
