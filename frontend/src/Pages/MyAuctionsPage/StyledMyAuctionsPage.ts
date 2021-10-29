import styled from "styled-components";

interface Props {
  isExpanded?: boolean;
}

export const StyledWrapper = styled.div`
  font-family: var(--font-text);
  margin: 1rem;
`;

export const StyledCardCurr = styled.div<Props>`
  background-color: ${(props) => (props.isExpanded ? 'var(--background-color)' : "24CAD6")};
`;

export const StyledCardSold = styled.span<Props>`
  margin: 1rem 0;
  background-color: ${(props) => (props.isExpanded ? 'var(--background-color)' : "24CAD6")};
`;

export const StyledCardNoSold = styled.span<Props>`
  margin: 1rem 0;
  background-color: ${(props) => (props.isExpanded ? 'var(--background-color)' : "24CAD6")};
`;
