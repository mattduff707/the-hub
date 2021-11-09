import styled from 'styled-components';
import TextInput from '../../../TextInput';

const QuestionInput = ({ isCorrect, isAnswered, inputVal, setInputVal }) => {
  /*Input Conditions*/
  const isNumber = (val) => {
    return !isNaN(parseFloat(val)) && !isNaN(val - 0);
  };
  const isEmptyStr = (val) => val === '';
  const isNotSpace = (val) => {
    const str = val.toString();
    return !str.includes(' ');
  };
  const isNegativeSymbol = (val) => {
    return val === '-' && val.length === 1;
  };
  const isLength = (val) => {
    const maxValLength = 6;
    return val.length <= maxValLength;
  };
  /************/

  /*Check if Input value is valid*/
  const isValid = (val, [...strictFuncs], [...conditionalFuncs]) => {
    const isStrict = strictFuncs.map((e) => e(val)).every((e) => e === true);
    const areConditionsMet = conditionalFuncs.map((e) => e(val)).includes(true);
    return isStrict && areConditionsMet ? true : false;
  };
  /************/

  const handleChange = (e) => {
    const inputVal = e.target.value;
    if (isValid(inputVal, [isNotSpace, isLength], [isEmptyStr, isNumber, isNegativeSymbol])) {
      setInputVal(inputVal);
    }
  };

  return !isAnswered ? (
    <AnswerInput autoComplete="off" name="answer" type="text" value={inputVal} onChange={handleChange} />
  ) : (
    <StyledAnswer isCorrect={isCorrect}>{inputVal}</StyledAnswer>
  );
};

const AnswerInput = styled(TextInput)`
  font-size: inherit;
  font-family: inherit;
  width: 100px;
  padding: 5px;
  margin: 0;
  color: var(--color-text);
  -moz-appearance: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const StyledAnswer = styled.span`
  color: ${(props) => (props.isCorrect ? 'var(--hover-confirm)' : `var(--hover-danger)`)};
`;

export default QuestionInput;
