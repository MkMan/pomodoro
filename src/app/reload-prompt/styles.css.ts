import { style } from '@vanilla-extract/css';

const container = style({
  padding: 0,
  margin: 0,
  width: 0,
  height: 0,
});

const toast = style({
  position: 'fixed',
  right: 0,
  bottom: 0,
  margin: 16,
  padding: 16,
  border: '1px solid #8885',
  borderRadius: 8,
  zIndex: 1,
  textAlign: 'left',
  boxShadow: '3px 4px 5px 0 #8885',
  backgroundColor: 'var(--color-background-inverted)',
});

const toastMessage = style({
  marginBottom: 16,
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: 'var(--color-font-inverted)',
  paddingBlockEnd: 16,
});

const buttonsWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export { buttonsWrapper, container, toast, toastMessage };
