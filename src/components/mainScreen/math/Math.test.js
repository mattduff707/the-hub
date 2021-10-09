import { render, screen } from '@testing-library/react';
import Math from './Math';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ActiveGame from './activeGame/ActiveGame';

test('if math does not start with no operations selected', () => {
  render(<Math />);
  const checkboxes = screen.getAllByRole('checkbox');

  checkboxes.forEach((checkbox) => {
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
  const beginGameBtn = screen.getByRole('button', { name: /start/i });
  userEvent.click(beginGameBtn);
  expect(screen.getByRole('heading', { name: /math blitz/i })).toBeInTheDocument();
});

test('if correct answer displays when user answers question', () => {
  const gameQuestions = [{ operation: 'multiplication', valOne: 72, valTwo: 81 }];
  render(
    <ActiveGame
      correctQuestions={[]}
      incorrectQuestions={[]}
      gameQuestions={gameQuestions}
      handleIsCorrect={() => ''}
    />
  );
  const questionInput = screen.getByRole('textbox');
  const userAnswer = '150';
  userEvent.type(questionInput, userAnswer);

  const submitAnswerBtn = screen.getByRole('button', { name: /submit/i });
  userEvent.click(submitAnswerBtn);
  const correctAnswer = gameQuestions[0].valOne * gameQuestions[0].valTwo;
  expect(screen.getByText(correctAnswer)).toBeInTheDocument();
});
