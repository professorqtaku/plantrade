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
import { useEffect } from "react";
import { Message as MessageProps } from "../../../Interfaces/Interfaces";
import { useAuth } from "../../../Contexts/AuthContext";
import { useChat } from "../../../Contexts/ChatContext";
import { useSocket } from "../../../Contexts/SocketContext";
import { TramRounded } from "@mui/icons-material";

const msgWrapper = document.getElementsByClassName("msgWrapper");
const scrollToBottom = (node: HTMLCollectionOf<Element>) => {
  node[0].scrollTop = node[0].scrollHeight;
};

const Message = () => {
  const { messages, getAllChatMsg } = useMessage();
  const { chatId } = useChat();
  const { whoAmI, setHasReadMsg } = useAuth();

  useEffect(() => {
    getAllChatMsg(chatId);
    scrollToBottom(msgWrapper);
    setHasReadMsg(true);
  }, []);

  useEffect(() => {
    scrollToBottom(msgWrapper);
    setHasReadMsg(true);
  }, [messages]);

  const getDate = (message: MessageProps) => {
    const date = message.createdDate.substring(0, 10);
    const time = message.createdDate.substring(11, 16);
    return `${date} ${time}`;
  };

  const renderMessageContent = (message: MessageProps, index: number) => (
    <StyledMessageWrapper key={message.id}>
      {message.writer.id !== whoAmI.id ? (
        renderAvatarContent(message)
      ) : (
        <StyledMessage sender={message.writer.id === whoAmI.id}>
          <StyledText>{message.message}</StyledText>
        </StyledMessage>
      )}
      {index === messages.length - 1 && message.writer.id === whoAmI.id ? (
        renderDateAndRead(message)
      ) : (
        <StyledDateOrRead sender={message.writer.id === whoAmI.id}>
          {getDate(message)}
        </StyledDateOrRead>
      )}
    </StyledMessageWrapper>
  );

  const renderAvatarContent = (message: MessageProps) => (
    <StyledAvatarWrapper>
      {message.writer.id !== whoAmI.id && (
        <StyledAvatar>{message.writer.username.charAt(0)}</StyledAvatar>
      )}
      <StyledMessage sender={message.writer.id === whoAmI.id}>
        <StyledText>{message.message}</StyledText>
      </StyledMessage>
    </StyledAvatarWrapper>
  );

  const renderDateAndRead = (message: MessageProps) => (
    <StyledDateAndRead>
      <StyledDateOrRead sender={message.writer.id === whoAmI.id} read={true}>
        {getDate(message)}
      </StyledDateOrRead>
    </StyledDateAndRead>
  );

  return (
    <StyledWrapper className="msgWrapper">
      {messages &&
        messages.map((message: MessageProps, index: number) =>
          renderMessageContent(message, index)
        )}
    </StyledWrapper>
  );
};

export default Message;
