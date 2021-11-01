import styled from "styled-components";

interface Props {
  isExpanded?: boolean;
}

export const StyledWrapper = styled.div`
  font-family: var(--font-title);
  font-size: 20px;
  margin: 1rem;
`;

export const StyledCardCurr = styled.div<Props>`
  background-color: ${(props) => (props.isExpanded ? 'var(--background-color)' : "24CAD6")};
`;

export const StyledCardSold = styled.div<Props>`
  background-color: ${(props) => (props.isExpanded ? 'var(--background-color)' : "24CAD6")};
`;

export const StyledCardNoSold = styled.div<Props>`
  background-color: ${(props) => (props.isExpanded ? 'var(--background-color)' : "24CAD6")};
`;

export const StyledBackBtn = styled.div`
 font-size: 0.9rem;
  font-weight: 600;
  font-family: var(--font-title);
  line-height: 2px;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 1rem;
  cursor: pointer;
`;

