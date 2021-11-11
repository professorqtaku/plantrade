import { StyledContentWrapper } from "./StyledDrawerContent";
import DrawerItem from "../DrawerItem/DrawerItem";
import { useChat } from "../../../Contexts/ChatContext";
import { Chat } from "../../../Interfaces/Interfaces";

const DrawerContent = () => {
  const { chats } = useChat();

  return (
    <StyledContentWrapper>
      {chats && chats.map((chat: Chat) => (
        <DrawerItem key={chat.id} chat={chat} />
      ))}
    </StyledContentWrapper>
  );
};

export default DrawerContent;
