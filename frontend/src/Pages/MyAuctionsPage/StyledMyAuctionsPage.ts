import styled from "styled-components";

interface Props {
  isExpanded?: boolean;
}

interface PropsButton {
  expand?: boolean;
  theme?: any;
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
