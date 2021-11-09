import styled from "styled-components";

interface MessageProps {
  id: string;
}

export const StyledWrapper = styled.div`
  background: #f8f8f8;
  display: grid;
`;

export const StyledMessage = styled.div<MessageProps>`
  background: ${(props) =>
  props.id === "1" ? "var(--dark-green)" : "var(--chat-green)"};
  width: fit-content;
  height: fit-content;
  max-width: 80%;
  padding: 1rem;
  border-radius: 1.5rem;
  justify-self: ${props => props.id === "1" ? 'end' : 'start'};
`;
