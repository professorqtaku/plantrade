import {
  StyledWrapper,
  StyledMessage,
  StyledText,
  StyledMessageWrapper,
  StyledDate,
} from "./StyledMessage";
import { useMessage } from "../../../Contexts/MessageContext";

const Message = () => {
  const { messages } = useMessage();
  return (
    <StyledWrapper>
      {messages.map((message: any) => (
        <StyledMessageWrapper>
          <StyledMessage id={message.id}>
            <StyledText>{message.text}</StyledText>
          </StyledMessage>
          <StyledDate id={message.id}>2020-10-12</StyledDate>
        </StyledMessageWrapper>
      ))}
    </StyledWrapper>
  );
};

export default Message;
