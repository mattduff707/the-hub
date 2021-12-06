import React, { useState } from "react";
import styled from "styled-components";
import IconBtn from "../../IconBtn";
import AdditionIcon from "../../../icons/Addition";
import DeleteIcon from "../../../icons/Delete";
import TextInput from "../../TextInput";
import { useSelector } from "react-redux";

const CategoryInput = ({ setCategoryInput, categoryInput }) => {
  const [isAdd, setIsAdd] = useState(false);

  const state = useSelector((state) => state.snippets.categories);

  const handleAdd = (e) => {
    setCategoryInput("");
    setIsAdd(() => !isAdd);
  };

  const handleCategoryInput = (e) => {
    setCategoryInput(e.target.value);
  };

  return (
    <Wrapper>
      {isAdd ? (
        <>
          <TextInput
            placeholder="New Category"
            value={categoryInput}
            onChange={handleCategoryInput}
          />
          <StyledIconBtn handleClick={handleAdd}>
            <DeleteIcon />
          </StyledIconBtn>
        </>
      ) : (
        <>
          <select onChange={handleCategoryInput} value={categoryInput}>
            <option hidden selected value></option>
            {state.map((cat) => (
              <option value={cat}>{cat}</option>
            ))}
          </select>
          <StyledIconBtn handleClick={handleAdd}>
            <AdditionIcon />
          </StyledIconBtn>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* padding-bottom: 20px; */
`;
const StyledIconBtn = styled(IconBtn)`
  margin-left: 5px;
`;

export default CategoryInput;
