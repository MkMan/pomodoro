import { render, screen } from '@solidjs/testing-library';

import { Container } from './container';

describe('Container', () => {
  it('should render the content', () => {
    render(() => (
      <Container>
        <h1>Test</h1>
      </Container>
    ));

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
