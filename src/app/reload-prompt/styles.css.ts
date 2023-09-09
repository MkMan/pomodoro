import { style } from '@vanilla-extract/css';

const container = style({
  height: 0,
  margin: 0,
  padding: 0,
  width: 0,
});

const toast = style({
  backgroundColor: 'var(--color-background-inverted)',
  border: '1px solid #8885',
  borderRadius: 8,
  bottom: 0,
  boxShadow: '3px 4px 5px 0 #8885',
  margin: 16,
  padding: 16,
  position: 'fixed',
  right: 0,
  textAlign: 'left',
  zIndex: 1,
});

const toastMessage = style({
  color: 'var(--color-font-inverted)',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: 16,
  paddingBlockEnd: 16,
});

const buttonsWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export { buttonsWrapper, container, toast, toastMessage };
