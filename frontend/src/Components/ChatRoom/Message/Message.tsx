import {
  StyledWrapper,
  StyledMessage,
  StyledText,
  StyledMessageWrapper,
  StyledDate,
  StyledAvatar,
  StyledAvatarWrapper,
} from "./StyledMessage";
import { useMessage } from "../../../Contexts/MessageContext";

const Message = () => {
  const { messages } = useMessage();

  const renderMessageContent = (message: any) => (
      <StyledMessageWrapper key={Math.random() * 100}>
        {message.id !== "1" ? (
          renderAvatarContent(message)
        ) : (
          <StyledMessage id={message.id}>
            <StyledText>{message.text}</StyledText>
          </StyledMessage>
        )}
        <StyledDate id={message.id}>2020-10-12</StyledDate>
      </StyledMessageWrapper>
  );

  const renderAvatarContent = (message: any) => (
    <StyledAvatarWrapper>
      {message.id != "1" && <StyledAvatar>A</StyledAvatar>}
      <StyledMessage id={message.id}>
        <StyledText>{message.text}</StyledText>
      </StyledMessage>
    </StyledAvatarWrapper>
  );

  return (
    <StyledWrapper>
      {messages.map((message: any) => renderMessageContent(message))}
    </StyledWrapper>
  );
};

export default Message;
