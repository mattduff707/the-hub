const one = 1;
const ten = 10;
const hundred = 100;
const thousand = 1000;
const tenThousand = 10000;
export const difficultiesArr = ['easy', 'medium', 'hard'];
export const operationsArr = ['addition', 'subtraction', 'multiplication'];

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateNumber = (difficulty) => {
  return difficulty === 'easy'
    ? random(one, hundred)
    : difficulty === 'medium'
    ? random(one, thousand)
    : random(one, tenThousand);
};

const createOperation = (difficulty, operation) => {
  if (operation === 'addition' || operation === 'subtraction') {
    const valOne = generateNumber(difficulty);
    const valTwo = generateNumber(difficulty);
    return { valOne, valTwo, operation };
  } else {
    if (difficulty === 'easy') {
      return { valOne: random(one, ten), valTwo: random(ten, hundred), operation };
    } else if (difficulty === 'medium') {
      return { valOne: random(ten, hundred), valTwo: random(ten, hundred), operation };
    } else {
      return { valOne: random(one, thousand), valTwo: random(one, thousand), operation };
    }
  }
};

const generateQuestions = (difficulty, operationsArr, quantity) => {
  let questions = [];
  const questionQuantity = quantity / operationsArr.length;

  operationsArr.forEach((val) => {
    for (let i = 0; i < questionQuantity; i++) {
      const newOperation = createOperation(difficulty, val);
      questions = [...questions, newOperation];
    }
  });
  const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  return shuffledQuestions;
};
export default generateQuestions;
