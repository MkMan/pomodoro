import * as styles from './styles';
import { ChipProps, ChipsProps } from './types';

export const Chip = ({
  children,
  colour,
  isChecked,
  isEnabled = true,
  name,
  value,
  onChange,
}: ChipProps): JSX.Element => (
  <label className={styles.label} style={{ '--color': colour } as any}>
    <input
      checked={isChecked}
      className={styles.input}
      disabled={!isEnabled}
      name={name}
      onChange={({ target: { value } }) => {
        onChange(parseInt(value));
      }}
      type="radio"
      value={value}
    />
    {children}
  </label>
);

export const Chips = ({ children, onChange }: ChipsProps) => {
  return (
    <fieldset className={styles.chips} data-testid="counters-group">
      {children({ name: 'counter-selector', onChange })}
    </fieldset>
  );
};
