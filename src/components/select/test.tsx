import { render, screen, within } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';

import { Select } from './select';
import { SelectProps } from './types';

describe('Select', () => {
  const user = userEvent.setup();

  it('should render correctly', async () => {
    const options: SelectProps['options'] = [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
    ];
    const { value, label } = options[0];
    const onChange = vi.fn();

    render(() => (
      <Select value={value} options={options} onChange={onChange} />
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
        value={'not real'}
        options={[{ value: 'en', label: 'English' }]}
        onChange={vi.fn()}
      />
    ));

    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Error in Select')
    );
  });
});
