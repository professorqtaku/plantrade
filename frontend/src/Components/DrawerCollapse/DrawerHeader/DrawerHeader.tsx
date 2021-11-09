import {
  StyledHeader,
  StyledExpandIcon,
  StyledText,
  StyledGoBackIcon,
  StyledTextWrapper,
} from "./StyledDrawerHeader";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDrawer } from "../../../Contexts/DrawerContext";

interface Props {
  toggle: Function;
}

const DrawerHeader = ({ toggle }: Props) => {
  const { showChatRoom, content, setShowChatRoom } = useDrawer();

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
      <StyledExpandIcon onClick={() => toggle()} />
      {!showChatRoom ? (
        <StyledText isright={true}>Antal: {content.length}</StyledText>
      ) : (
        <StyledText isright={true}>Name on auction</StyledText>
      )}
    </StyledHeader>
  );
};

export default DrawerHeader;
