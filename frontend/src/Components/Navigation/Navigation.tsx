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

const Navigation = () => {

  const history = useHistory();
  const { home, auction, notis, message, profile } = useNav();
  const { toggleLoginModal } = useModal();
  const { whoAmI } = useAuth();

  const handleSelect = (
    url?: string
  ) => {
    if (whoAmI == null) {
      toggleLoginModal();
    } 
    else {
      url && history.push(url);
    }
  };

  const renderIcons = () => (
    <StyledIconWrapper>
      <StyledInnerWrapper selected={home}>
        <StyledHomeIcon
          selected={home}
          onClick={() => handleSelect("/")}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={auction}>
        <StyledHammerIcon
          selected={auction}
          onClick={() => handleSelect("/auctions")}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={notis}>
        <StyledNotisIcon
          selected={notis}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={message}>
        <StyledMsgIcon
          selected={message}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={profile}>
        <StyledAccountIcon
          selected={selected5}
          onClick={() => handleSelect(setSelected5, "/my-page")}
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
