import { useChat } from "../../../../Contexts/ChatContext";
import { useDrawer } from "../../../../Contexts/DrawerContext";
import {
  StyledHeader,
  StyledExpandIcon,
  StyledText,
  StyledGoBackIcon,
  StyledTextWrapper,
  StyledAmountOfMsg,
} from "../StyledDrawerHeader";

const ChatDrawerHeader = () => {
  const { showChatRoom, setShowChatRoom, toggleDrawer } = useDrawer();
  const { chats, chatTitle } = useChat();

  const handleToggle = () => {
    toggleDrawer();
    setShowChatRoom(false);
  };

  return (
    <StyledHeader>
      {!showChatRoom ? (
        <StyledText isright={false}>Meddelanden</StyledText>
      ) : (
        <StyledTextWrapper onClick={() => setShowChatRoom(false)}>
          <StyledGoBackIcon />
          <StyledText isright={false}>Tillbaka</StyledText>
        </StyledTextWrapper>
      )}
      <StyledExpandIcon onClick={handleToggle} />
      {!showChatRoom ? (
        <StyledText isright={true}>
          Antal: <StyledAmountOfMsg>{chats.length}</StyledAmountOfMsg>
        </StyledText>
      ) : (
        <StyledText isright={true}>{chatTitle}</StyledText>
      )}
    </StyledHeader>
  );
};

export default ChatDrawerHeader;
