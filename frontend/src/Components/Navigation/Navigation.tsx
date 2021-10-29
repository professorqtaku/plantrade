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
import { useState } from "react";
import { useHistory } from "react-router";
import {useNav} from '../../Contexts/NavigationContext'

const Navigation = () => {

  const history = useHistory();
  const { home, auction, notis, message, profile } = useNav();

  // const [selected1, setSelected1] = useState(false);
  // const [selected2, setSelected2] = useState(false);
  // const [selected3, setSelected3] = useState(false);
  // const [selected4, setSelected4] = useState(false);
  // const [selected5, setSelected5] = useState(false);

  const handleSelect = (
    url?: string
  ) => {
    // setSelected1(false);
    // setSelected2(false);
    // setSelected3(false);
    // setSelected4(false);
    // setSelected5(false);
    // select(true);

    url && history.push(url);
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
          selected={profile}
          onClick={() => handleSelect("/myPage")}
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
