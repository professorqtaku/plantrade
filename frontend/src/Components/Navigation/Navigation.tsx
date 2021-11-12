import Box from "@mui/material/Box";
import {
  StyledAppBar,
  StyledIconWrapper,
  StyledHomeIcon,
  StyledInnerWrapper,
  StyledHammerIcon,
  StyledNotisIcon,
  StyledMsgIcon,
  StyledAccountIcon,
} from "./StyledNavigation";
import {useModal} from "../../Contexts/ModalContext"
import { useAuth } from "../../Contexts/AuthContext";
import { useHistory } from "react-router";
import {useNav} from '../../Contexts/NavigationContext'
import { useDrawer } from "../../Contexts/DrawerContext";
import { useSearch } from "../../Contexts/SearchContext";
import { useChat } from "../../Contexts/ChatContext";

const Navigation = () => {

  const history = useHistory();
  const { home, auction, notis, message, profile, handleSelect, setNotis, setMessage } = useNav();
  const { toggleLoginModal } = useModal();
  const { whoAmI } = useAuth();
  const { setShowDrawer } = useDrawer();
  const { clearFilter } = useSearch();
   const { getChatsByCurrentUser } = useChat();

  const handleSelectedIcon = (
    url?: string
  ) => {
    if (whoAmI == null && url == "/my-page") {
      toggleLoginModal();
    } else {
      url && history.push(url);
      clearFilter();
    }
  };

  const handleDrawer = (value: string, setter: Function) => {

    if (whoAmI != null) {
      handleSelect(setter);
      setShowDrawer(false);
      if (value == "message") {
        getChatsByCurrentUser();
        setShowDrawer(true);
      }
      else if (value == "notis") {
        setShowDrawer(true);    
      }
    }
    else {
      toggleLoginModal();
    }
  }

  const renderIcons = () => (
    <StyledIconWrapper>
      <StyledInnerWrapper selected={home}>
        <StyledHomeIcon
          selected={home}
          onClick={() => handleSelectedIcon("/")}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={auction}>
        <StyledHammerIcon
          selected={auction}
          onClick={() => handleSelectedIcon("/auctions")}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={notis}>
        <StyledNotisIcon
          selected={notis}
          onClick={() => handleDrawer("notis", setNotis)}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={message}>
        <StyledMsgIcon
          selected={message}
          onClick={() => handleDrawer("message", setMessage)}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={profile}>
        <StyledAccountIcon
          selected={profile}
          onClick={() => handleSelectedIcon("/my-page")}
        />
      </StyledInnerWrapper>
    </StyledIconWrapper>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">{renderIcons()}</StyledAppBar>
    </Box>
  );
};

export default Navigation;
