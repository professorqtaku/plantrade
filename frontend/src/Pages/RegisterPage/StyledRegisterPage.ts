import styled from "styled-components";

export const StyledWrapper = styled.div`
  
`;

export const StyledForm = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 70%;
  margin: 0 auto;

`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
  font-size: 17px;
  &:focus{
    border-bottom: 1px solid green;
  }
`;