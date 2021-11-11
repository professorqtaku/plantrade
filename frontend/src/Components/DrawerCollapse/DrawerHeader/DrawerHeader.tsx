import {
  StyledHeader,
  StyledExpandIcon,
  StyledText,
  StyledGoBackIcon,
  StyledTextWrapper,
  StyledAmountOfMsg,
} from "./StyledDrawerHeader";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDrawer } from "../../../Contexts/DrawerContext";
import { useChat } from "../../../Contexts/ChatContext";

interface Props {
  toggle: Function;
}

const DrawerHeader = ({ toggle }: Props) => {
  const { showChatRoom, setShowChatRoom } = useDrawer();
  const { chats, chatTitle } = useChat();

  const handleToggle = () => {
    toggle();
    setShowChatRoom(false);
  }

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

export default DrawerHeader;
