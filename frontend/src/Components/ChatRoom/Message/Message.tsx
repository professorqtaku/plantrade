import {
  StyledWrapper,
  StyledMessage,
  StyledText,
  StyledMessageWrapper,
  StyledDate,
} from "./StyledMessage";
import { useMessage } from "../../../Contexts/MessageContext";

const Message = () => {
  const renderMessageContent = (message: any) => (
    <StyledMessageWrapper key={Math.random() * 100}>
      <StyledMessage id={message.id}>
        <StyledText>{message.text}</StyledText>
      </StyledMessage>
      <StyledDate id={message.id}>2020-10-12</StyledDate>
    </StyledMessageWrapper>
  );

  const { messages } = useMessage();
  return (
    <StyledWrapper>
      {messages.map((message: any) => renderMessageContent(message))}
    </StyledWrapper>
  );
};

export default Message;
