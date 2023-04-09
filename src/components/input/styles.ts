import { css } from '@emotion/css';

import { appearanceBlock, appearanceInline } from './types';

export const wrapper = css`
  display: flex;
  gap: 4px;
  font-size: 1rem;
  font-weight: 500;

  &.${appearanceBlock} {
    flex-direction: column;
  }

  &.${appearanceInline} {
    align-items: baseline;
  }
`;

export const labelAsterisk = css({
  ':after': {
    content: '" *"',
    color: 'red',
    fontSize: '1.1rem',
  },
});

export const input = css({
  height: 40,
  borderRadius: 4,
  padding: 8,
  paddingInlineStart: 16,
  border: '1px solid lightgrey',
  width: '100%',

  ':disabled': {
    cursor: 'not-allowed',
    color: 'darkgray',
  },
});

export const asterisk = css({
  color: 'red',
  fontSize: '1.1rem',
});

export const error = css({
  color: 'red',
});
