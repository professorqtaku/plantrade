import styled from 'styled-components';

interface Props {
  index: number
}

interface PropsHost {
  me: boolean
}

export const StyledRow = styled.div<Props>`
  &:nth-child(odd) {
    background-color: lightgrey;
  }
`;

export const StyledCell = styled.div<PropsHost>`
  font-weight: ${(props) => props.me ? `bolder` : `normal`};
`;