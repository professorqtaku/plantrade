import styled from "styled-components";

interface WrapperProps {
  grid?: boolean;
  gridColumns?: string;
}

export const StyledWrapper = styled.div<WrapperProps>`
  display: ${(props) => props.grid && "grid"};
  grid-template-columns: ${(props) => props.gridColumns && props.gridColumns};
  margin-bottom: 2rem;
  background-image: url("https://i.pinimg.com/564x/f8/2a/c0/f82ac0c390529f0a96d975c6b6f7c997.jpg");
  height: 8rem;
`;
