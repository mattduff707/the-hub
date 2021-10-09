import { render, screen, fireEvent } from '@testing-library/react';
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

describe('Todo list core functionality works', () => {
  test('if Add todo, edit todo, and remove todo works', () => {
    setup();
    const testText = 'This is a test todo';
    const todoInput = screen.getByPlaceholderText(/type task/i);
    const submitBtn = screen.getByRole('button', { name: /add/i });

    userEvent.type(todoInput, testText);
    userEvent.click(submitBtn);

    const todoItem = screen.getByText(testText);
    expect(todoItem).toBeInTheDocument();

    const editTodoBtn = screen.getByRole('button', { name: /edit todo/i });
    userEvent.click(editTodoBtn);

    const todoEditTextBox = screen.getByDisplayValue(testText);
    const editText = ' and it has now been edited';
    userEvent.type(todoEditTextBox, editText);

    const confirmEditBtn = screen.getByRole('button', { name: /confirm edit/i });
    userEvent.click(confirmEditBtn);

    expect(screen.getByText(testText + editText)).toBeInTheDocument();

    const completeTaskBtn = screen.getByRole('button', { name: /complete todo/i });
    userEvent.click(completeTaskBtn);

    expect(screen.queryByRole(testText + editText)).toBeNull();
  });
});
