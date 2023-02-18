import { cx, withMargins } from '$app-utils';

import * as styles from './styles';
import { InputProps } from './types';

const Input = ({
  className,
  error,
  label,
  isRequired,
  onChange,
  value,
  ...inputProps
}: InputProps) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <label
        className={cx(isRequired && styles.labelAsterisk)}
        htmlFor={label}
        key={label}
      >
        {label}
      </label>
      <input
        className={styles.input}
        {...inputProps}
        aria-required={isRequired}
        id={label}
        onChange={onChange}
        value={value}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

const InputWithMargins = withMargins(Input);

export { InputWithMargins as Input };
