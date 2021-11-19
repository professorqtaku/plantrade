import styled from "styled-components";

export const StyledParagraph = styled.span`
  font-family: var(--font-text);
  font-size: 1rem;
  line-height: 0.2rem;
  margin: 1rem 0 0 0;
`;

export const StyledButton = styled.span`
  font-weight: 900;
  letter-spacing: 0.1px;
  color: var(--dark-green);
  padding: 0.1rem 0.3rem;
  border: 0.5px solid var(--dark-green);
  border-radius: 30px;
  &:hover{
    cursor: pointer;
  }
`;