import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from '../../App';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

describe('Nav Buttons route correctly', () => {
  test('Link to math routes correctly', () => {
    setup();

    const mathLink = screen.getByRole('link', { name: /math/i });
    userEvent.click(mathLink);
    expect(screen.getByRole('heading', { name: /math blitz/i })).toBeInTheDocument();
  });
});
