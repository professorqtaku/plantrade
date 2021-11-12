import { StyledContentWrapper } from "./StyledDrawerContent";
import DrawerItem from "../DrawerItem/DrawerItem";
import { useChat } from "../../../Contexts/ChatContext";
import { useNotification } from '../../../Contexts/NotificationContext'
import { Chat, Notification } from "../../../Interfaces/Interfaces";
import { useNav } from "../../../Contexts/NavigationContext";
import NotificationDrawerItem from "../DrawerItem/NotificationDrawerItem/NotificationDrawerItem";

const DrawerContent = () => {
  const { message } = useNav();
  const { chats } = useChat();
  const { notifications } = useNotification();

  return (
    <StyledContentWrapper>
      {message && chats
        ? chats.map((chat: Chat) => (
            <DrawerItem key={`chat-item-${chat.id}`} chat={chat} />
          ))
        : notifications &&
          notifications.map((notice: Notification) => (
            <NotificationDrawerItem
              key={`notification-item-${notice.id}`}
              notice={notice}
            />
          ))}
    </StyledContentWrapper>
  );
};

export default DrawerContent;
