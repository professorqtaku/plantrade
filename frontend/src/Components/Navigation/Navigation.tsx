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
import { useModal } from "../../Contexts/ModalContext";
import { useAuth } from "../../Contexts/AuthContext";
import { useHistory } from "react-router";
import { useNav } from "../../Contexts/NavigationContext";
import { useDrawer } from "../../Contexts/DrawerContext";
import { useSearch } from "../../Contexts/SearchContext";
import { useChat } from "../../Contexts/ChatContext";
import { useNotification } from "../../Contexts/NotificationContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Navigation = () => {
  const history = useHistory();
  const location = useLocation();
  const {
    home,
    auction,
    notis,
    message,
    profile,
    handleSelect,
    setHome,
    setAuction,
    setProfile,
    setNotis,
    setMessage,
  } = useNav();
  const { toggleLoginModal } = useModal();
  const { whoAmI } = useAuth();
  const { showDrawer, setShowDrawer } = useDrawer();
  const { clearFilter } = useSearch();
  const { getChatsByCurrentUser } = useChat();
  const { getNotificationsByCurrentUser } = useNotification();

  const paths: Record<string, Function> = {
    "/": setHome,
    "/auctions": setAuction,
    "/my-page": setProfile
  }

  useEffect(() => {
    if (!showDrawer) {
      let pathname = location.pathname;
      for (let key of Object.keys(paths)) {
        if (key != "/" && pathname.includes(key))
          pathname = key
      }
      const setter = paths[pathname];
      if (setter) {
        handleSelect(setter);
      }
    }
  },[showDrawer])

  const handleSelectedIcon = (setter: Function, url?: string) => {
    if (whoAmI == null && url == "/my-page") {
      toggleLoginModal();
    } else {
      url && history.push(url);
      handleSelect(setter);
      clearFilter();
      setShowDrawer(false);
    }
  };

  const handleDrawer = (setter: Function, value: string) => {
    if (whoAmI != null) {
      handleSelect(setter);
      setShowDrawer(false);
      if (value == "message") {
        getChatsByCurrentUser();
        setShowDrawer(true);
      } else if (value == "notis") {
        getNotificationsByCurrentUser();
        setShowDrawer(true);
      }
    } else {
      toggleLoginModal();
    }
  };

  const renderIcons = () => (
    <StyledIconWrapper>
      <StyledInnerWrapper selected={home}>
        <StyledHomeIcon
          selected={home}
          onClick={() => handleSelectedIcon(setHome, "/")}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={auction}>
        <StyledHammerIcon
          selected={auction}
          onClick={() => handleSelectedIcon(setAuction, "/auctions")}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={notis}>
        <StyledNotisIcon
          selected={notis}
          onClick={() => handleDrawer(setNotis, "notis")}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={message}>
        <StyledMsgIcon
          selected={message}
          onClick={() => handleDrawer(setMessage, "message")}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={profile}>
        <StyledAccountIcon
          selected={profile}
          onClick={() => handleSelectedIcon(setProfile, "/my-page")}
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
