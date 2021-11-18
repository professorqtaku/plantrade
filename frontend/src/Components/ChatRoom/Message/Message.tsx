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

const msgWrapper = document.getElementsByClassName("msgWrapper");
const scrollToBottom = (node: HTMLCollectionOf<Element>) => {
  node[0].scrollTop = node[0].scrollHeight;
};

const Message = () => {
  const { messages, getAllChatMsg } = useMessage();
  const { chatId } = useChat();
  const { whoAmI } = useAuth();
  const { socket, isRead, setIsRead } = useSocket();

  useEffect(() => {
    socket.on("message", (data: any) => onMessage(data));
    socket.once("join", (data: any) => onJoin(data));
    socket.once("leave", (data: any) => onLeave(data));

    const onMessage = async (data: any) => {
      if (data && whoAmI && chatId) {
        if (data.id === whoAmI.id) {
          return;
        }
        await getAllChatMsg(chatId);
      }
    };

    const onJoin = (data: number) => {
      console.log("Client joined the room, clients: ", data);
      if (data === 2) {
        setIsRead(true);
      }
    };

    const onLeave = async (data: number) => {
      console.log("Client left room");
      if (data === 1) {
        await getAllChatMsg(chatId);
      }
      setIsRead(false);
    };

    getAllChatMsg(chatId);
    socket.emit("join", chatId);
    scrollToBottom(msgWrapper);
    return () => {
      console.log("hallå???");
      socket.emit("leave", chatId);
      socket.off("message", (data: any) => onMessage(data));
      socket.off("join", (data: any) => onJoin(data));
       socket.off("leave", (data: any) => onLeave(data));
    };
  }, []);

  useEffect(() => {
    scrollToBottom(msgWrapper);
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
      {index === messages.length - 1 &&
      message.writer.id === whoAmI.id &&
      (message.isRead || isRead) ? (
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
      <StyledDateOrRead sender={message.writer.id === whoAmI.id}>
        <StyledCheckedIcon />
        Läst
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
