import { render, screen } from '@solidjs/testing-library';

import { Footer } from './footer';

describe('Footer', () => {
  it('should include a link to the source code', () => {
    render(() => <Footer />);

    expect(
      screen.getByRole('link', { name: 'Source code' })
    ).toBeInTheDocument();
  });
});
