import { render, screen } from '@solidjs/testing-library';

import { Settings } from './settings';

describe('Settings', () => {
  it('should render the correct sections', () => {
    render(() => <Settings />);

    const headings = screen.getAllByRole('heading');

    expect(headings).toHaveLength(3);
    expect(headings[0]).toHaveTextContent('Durations');
    expect(headings[1]).toHaveTextContent('Alerts');
    expect(headings[2]).toHaveTextContent('Theme');
  });
});
