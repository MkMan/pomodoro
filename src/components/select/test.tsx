import { render, screen, within } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';

import type { SelectProps } from './types';

import { Select } from './select';

describe('Select', () => {
  const user = userEvent.setup();

  it('should render correctly', async () => {
    const options: SelectProps['options'] = [
      { label: 'English', value: 'en' },
      { label: 'Spanish', value: 'es' },
    ];
    const { label, value } = options[0];
    const onChange = vi.fn();

    render(() => (
      <Select onChange={onChange} options={options} value={value} />
    ));

    const dropDown = screen.getByRole('combobox');
    const dropDownOptions = within(dropDown).getAllByRole('option');

    expect(dropDown).toHaveValue(value);
    expect(dropDown).toHaveDisplayValue(label);
    expect(dropDownOptions).toHaveLength(options.length);

    await user.selectOptions(dropDown, options[1].value);
    expect(onChange).toHaveBeenCalledWith(expect.any(Event));
  });

  it('should log an error when the value provided is not in the options', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    render(() => (
      <Select
        onChange={vi.fn()}
        options={[{ label: 'English', value: 'en' }]}
        value={'not real'}
      />
    ));

    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Error in Select'),
    );
  });
});
