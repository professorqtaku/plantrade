import styled from 'styled-components';

interface PropsHost {
  me: boolean
}

export const StyledCell = styled.div<PropsHost>`
  font-weight: ${(props) => props.me ? `bolder` : `normal`};
`;

export const StyledNoBid = styled.p`
  text-align: center;
  padding-left: 10px;
`;