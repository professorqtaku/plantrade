import { StyledContentWrapper } from "./StyledDrawerContent";
import DrawerItem from "../DrawerItem/DrawerItem";
import { useChat } from "../../../Contexts/ChatContext";
import { Chat } from "../../../Interfaces/Interfaces";
import { useDrawer } from "../../../Contexts/DrawerContext";
import { useNav } from "../../../Contexts/NavigationContext";

const DrawerContent = () => {
  const { message, notis } = useNav();
  const { chats } = useChat();

  return (
    <StyledContentWrapper>
      {message && chats && chats.map((chat: Chat) => (
        <DrawerItem key={chat.id} chat={chat} />
      ))}
    </StyledContentWrapper>
  );
};

export default DrawerContent;
