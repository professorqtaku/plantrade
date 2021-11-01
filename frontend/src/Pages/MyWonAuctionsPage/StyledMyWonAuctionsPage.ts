import styled from "styled-components";

interface Props {
  isExpanded?: boolean;
}

export const StyledWrapper = styled.div`
  font-family: var(--font-title);
  font-size: 20px;
  margin: 1rem;
`;

export const StyledCardUnpaid = styled.div<Props>`
  background-color: ${(props) => (props.isExpanded ? 'var(--background-color)' : "24CAD6")};
`;

export const StyledCardPaid = styled.div<Props>`
  background-color: ${(props) => (props.isExpanded ? 'var(--background-color)' : "24CAD6")};
`;