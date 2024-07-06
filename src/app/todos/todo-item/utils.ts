import { type JSX } from 'solid-js';

type TextDecorationStyles = JSX.CSSProperties['text-decoration-style'];

const getRandomStrikethroughStyle = (): TextDecorationStyles => {
  const supportedStyles: TextDecorationStyles[] = ['solid', 'wavy', 'double'];
  const randomIndex = Math.floor(Math.random() * supportedStyles.length);

  return supportedStyles[randomIndex];
};

export { getRandomStrikethroughStyle };
