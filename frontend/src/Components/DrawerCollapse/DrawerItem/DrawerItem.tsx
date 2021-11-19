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
  const { getAllChatMsg } = useMessage();

  const handleShowMessageView = () => {
    setChatId(chat.id);
    setShowChatRoom(true);
    setChatTitle(chat.auction.title);
  };

  useEffect(() => {
    getAllChatMsg(chat?.id);
    getChatsByCurrentUser();
  }, []);


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
      <StyledBadge badgeContent={0}>
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
