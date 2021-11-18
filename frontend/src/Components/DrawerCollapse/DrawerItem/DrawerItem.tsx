import {
  StyledWrapper,
  StyledTitle,
  StyledLastMsg,
  StyledName,
  StyledAvatar,
  StyledInnerWrapper,
  StyledBadge,
  StyledSwipe,
  StyledDelete,
  StyledTrashCan,
  StyledDeleteText,
} from "./StyledDrawerItem";
import {
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { useDrawer } from "../../../Contexts/DrawerContext";
import { Chat, Message } from "../../../Interfaces/Interfaces";
import { useChat } from "../../../Contexts/ChatContext";
import { useMessage } from "../../../Contexts/MessageContext";
import { useEffect, useState } from "react";
import { useAuth } from "../../../Contexts/AuthContext";

interface Props {
  chat: Chat;
}

  const DrawerItem = ({ chat }: Props) => {
    const { setShowChatRoom } = useDrawer();
    const { setChatTitle, setChatId, getChatsByCurrentUser } = useChat();
    const { messages, getAllChatMsg } = useMessage();
    const { whoAmI } = useAuth();
    const [counter, setCounter] = useState(0);
    const { isRead } = useSocket();

    const handleShowMessageView = () => {
      setChatId(chat.id);
      setShowChatRoom(true);
      setChatTitle(chat.auction.title);
    };

    useEffect(() => {
      getAllChatMsg(chat?.id);
      getChatsByCurrentUser();
    }, []);

    useEffect(() => {
      badgeCounter(chat.messages, whoAmI.id);
      console.log(whoAmI.id , 'whoID?')
    },[setCounter]);

    // chat?.messages[chat?.messages?.length - 1]

    const badgeCounter = (messArray: Message[] | undefined, userID: number) => {

      
      console.log(chat, 'chat')
      if (chat.messages && chat.messages.slice(-1).pop()?.writer.id != whoAmI.id) {
        
        console.log("Du är den som ska få badge");
        console.log(chat.messages, 'arrayMsg');
        
  
      messArray?.map(c => {
        !c.isRead ? setCounter(counter + 1) : setCounter(0)
      })
      getAllChatMsg(chat?.id);
      }
    };

    const trailingActions = () => (
      <TrailingActions>
        <SwipeAction
          destructive={true}
          onClick={() => console.info("swipe action triggered")}
        >
          <StyledDelete>
            <StyledTrashCan />
            <StyledDeleteText>Ta bort</StyledDeleteText>
          </StyledDelete>
        </SwipeAction>
      </TrailingActions>
    );

    const renderMsgContent = (
      <StyledInnerWrapper>
        <StyledTitle>{chat.auction.title}</StyledTitle>
        {chat?.messages && chat.messages.slice(-1).pop() && (
          <StyledLastMsg>
            <StyledName>
              {chat.messages && chat.messages.slice(-1).pop()?.writer.username}:
            </StyledName>
            {chat.messages && chat.messages.slice(-1).pop()?.message}
          </StyledLastMsg>
        )}
      </StyledInnerWrapper>
    );

    const renderBadge = (
      <StyledBadge badgeContent={counter}>
        <StyledAvatar>
          {chat.receiver.username.charAt(0).toLocaleUpperCase()}
        </StyledAvatar>
      </StyledBadge>
    );

    return (
      <StyledSwipe>
        <SwipeableListItem trailingActions={trailingActions()}>
          <StyledWrapper onClick={handleShowMessageView}>
            {chat.messages && renderMsgContent}
            {renderBadge}
          </StyledWrapper>
        </SwipeableListItem>
      </StyledSwipe>
    );
  };

export default DrawerItem;
