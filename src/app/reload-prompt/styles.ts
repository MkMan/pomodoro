import { css } from '@emotion/css';

export const container = css({
  padding: 0,
  margin: 0,
  width: 0,
  height: 0,
});

export const toast = css({
  position: 'fixed',
  right: 0,
  bottom: 0,
  margin: 16,
  padding: 16,
  border: '1px solid #8885',
  borderRadius: 4,
  zIndex: 1,
  textAlign: 'left',
  boxShadow: '3px 4px 5px 0 #8885',
  backgroundColor: 'white',
});

export const toastMessage = css({
  marginBottom: 8,
  fontSize: '1.2rem',
  fontWeight: 'bold',
});

export const toastButton = css({
  border: '1px solid #8885',
  outline: 'none',
  marginRight: 5,
  borderRadius: 2,
  padding: '3px 10px',
  cursor: 'pointer',
});
