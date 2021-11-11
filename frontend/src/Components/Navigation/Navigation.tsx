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
import { useState } from "react";
import { useHistory } from "react-router";
import {useNav} from '../../Contexts/NavigationContext'
import { useDrawer } from "../../Contexts/DrawerContext";
import { useChat } from "../../Contexts/ChatContext";

const Navigation = () => {

  const history = useHistory();
  const { home, auction, notis, message, profile } = useNav();
  const { toggleLoginModal } = useModal();
  const { whoAmI } = useAuth();
  const { toggleDrawer } = useDrawer();
   const { getChatsByCurrentUser } = useChat();

  const handleSelect = (
    url?: string
  ) => {
    if (whoAmI == null && url == "/my-page") {
      toggleLoginModal();
    } else {
      url && history.push(url);
    }
  };

  const handleMsg = () => {
    toggleDrawer();
    getChatsByCurrentUser();
  }

  const renderIcons = () => (
    <StyledIconWrapper>
      <StyledInnerWrapper selected={home}>
        <StyledHomeIcon selected={home} onClick={() => handleSelect("/")} />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={auction}>
        <StyledHammerIcon
          selected={auction}
          onClick={() => handleSelect("/auctions")}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={notis}>
        <StyledNotisIcon selected={notis} />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={message}>
        <StyledMsgIcon selected={message} onClick={handleMsg} />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={profile}>
        <StyledAccountIcon
          selected={profile}
          onClick={() => handleSelect("/my-page")}
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
