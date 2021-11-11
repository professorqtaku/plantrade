import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import CheckIcon from "@mui/icons-material/Check";

interface MessageProps {
  id: string;
  read?: boolean
}

export const StyledWrapper = styled.div`
  background: #f8f8f8;
  max-height: 70vh;
  overflow: scroll;
`;

export const StyledMessageWrapper = styled.div`
  display: grid;
  height: fit-content;
  &:last-child {
    
  }
`;

export const StyledMessage = styled.div<MessageProps>`
  background: ${(props) =>
    props.id === "1" ? "var(--dark-green)" : "var(--light-green)"};
  width: fit-content;
  max-width: 70%;
  padding: 1rem;
  border-radius: 1.5rem;
  justify-self: ${(props) => (props.id === "1" ? "end" : "start")};
  margin: ${(props) => (props.id === "1" ? "0 1rem 0 0" : "0 0 0 1rem")};
  align-self: center;
`;

export const StyledText = styled.p`
  color: white;
  margin: 0;
  padding: 0;
`;


export const StyledDateOrRead = styled.p<MessageProps>`
  font-size: 0.7rem;
  color: black;
  font-style: italic;
  width: fit-content;
  height: ${props => props.read ? 'auto' : '2rem' };
  justify-self: ${(props) => (props.id === "1" ? "end" : "start")};
  margin: ${(props) => (props.id === "1" ? "0 2rem 0 0" : "0 0 0 5rem")};
`;

export const StyledAvatarWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const StyledDateAndRead = styled.div`
  display: grid;
`

export const StyledAvatar = styled(Avatar)`
  background: var(--dark-green);
  align-self: center;
  margin-left: 0.7rem;
`;

export const StyledCheckedIcon = styled(CheckIcon)`
  color: var(--light-green);
  font-size: 0.6rem;
  margin-right: 0.2rem;
`;
