import {
  StyledWrapper,
  StyledMessage,
  StyledText,
  StyledMessageWrapper,
  StyledDateOrRead,
  StyledAvatar,
  StyledAvatarWrapper,
  StyledDateAndRead,
  StyledCheckedIcon,
} from "./StyledMessage";
import { useMessage } from "../../../Contexts/MessageContext";

const Message = () => {
  const { messages } = useMessage();

  const renderMessageContent = (message: any, index: number) => (
    <StyledMessageWrapper key={Math.random() * 100}>
      {message.id !== "1" ? (
        renderAvatarContent(message)
      ) : (
        <StyledMessage id={message.id}>
          <StyledText>{message.text}</StyledText>
        </StyledMessage>
      )}
      {index === messages.length - 1 && message.id === "1" ? (
        renderDateAndRead(message)
      ) : (
        <StyledDateOrRead id={message.id}>2020-10-12</StyledDateOrRead>
      )}
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

  const renderDateAndRead = (message: any) => (
    <StyledDateAndRead>
      <StyledDateOrRead id={message.id} read={true}>
        2020-10-12
      </StyledDateOrRead>
      <StyledDateOrRead id={message.id}>
        <StyledCheckedIcon />
        Läst
      </StyledDateOrRead>
    </StyledDateAndRead>
  );

  return (
    <StyledWrapper>
      {messages.map((message: any, index: number) =>
        renderMessageContent(message, index)
      )}
    </StyledWrapper>
  );
};

export default Message;
