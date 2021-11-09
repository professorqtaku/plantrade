import {
  StyledHeader,
  StyledExpandIcon,
  StyledText,
} from "./StyledDrawerHeader";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useDrawer} from '../../../Contexts/DrawerContext'

interface Props {
  toggle: Function
}

const DrawerHeader = ({ toggle }: Props) => {
  const { showChatRoom, content, setShowChatRoom } = useDrawer();

  return (
    <StyledHeader>
      {!showChatRoom ? (
        <StyledText>Meddelanden</StyledText>
      ) : (
        <StyledText onClick={() => setShowChatRoom(false)}>Tillbaka</StyledText>
      )}
      <StyledExpandIcon onClick={() => toggle()} />
      {!showChatRoom ? (
        <StyledText>Antal: {content.length}</StyledText>
      ) : (
        <StyledText>Name on auction</StyledText>
      )}
    </StyledHeader>
  );
};

export default DrawerHeader;
