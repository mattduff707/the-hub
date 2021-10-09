import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';
import '@testing-library/jest-dom';

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

describe('Home page Renders with API', () => {
  test('Page Loading', () => {
    setup();

    expect(screen.getByRole('heading', { name: /loading.../i })).toBeInTheDocument();
  });
  test('API Fetches on Render', async () => {
    setup();
    expect(await screen.findByText(/description/i)).toBeInTheDocument();
  });
});
