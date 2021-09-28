const one = 1;
const ten = 10;
const hundred = 100;
const thousand = 1000;
const tenThousand = 10000;
export const difficultiesArr = ['easy', 'medium', 'hard'];
export const operationsArr = ['addition', 'subtraction', 'multiplication'];

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// Generate a random number based on difficulty. Used for addition and subtraction
const generateNumber = (difficulty) => {
  return difficulty === 'easy'
    ? random(one, hundred)
    : difficulty === 'medium'
    ? random(one, thousand)
    : random(one, tenThousand);
};

// Create operation object. Used to generate questions
const createOperation = (difficulty, operation) => {
  if (operation === 'addition' || operation === 'subtraction') {
    const valOne = generateNumber(difficulty);
    const valTwo = generateNumber(difficulty);
    return { valOne, valTwo, operation }; 
  } else { // Generate Multiplication object. Numbers have to be a little lower in multiplication
    if (difficulty === 'easy') {
      return { valOne: random(one, ten), valTwo: random(ten, hundred), operation };
    } else if (difficulty === 'medium') {
      return { valOne: random(ten, hundred), valTwo: random(ten, hundred), operation };
    } else {
      return { valOne: random(one, hundred), valTwo: random(one, thousand), operation };
    }
  }
};


// Function used to generate an array of questions with a randomized order. 
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
