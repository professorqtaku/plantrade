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
import {useModal} from "../../Contexts/ModalContext"

const Navigation = () => {

  const history = useHistory();
  const { toggleLogin } = useModal();
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);

  const handleSelect = (
    select: React.Dispatch<React.SetStateAction<boolean>>,
    url?: string
  ) => {
    if (select === setSelected5) {
      toggleLogin();
    }
    setSelected1(false);
    setSelected2(false);
    setSelected3(false);
    setSelected4(false);
    setSelected5(false);
    select(true);

    url && history.push(url);
  };

  const renderIcons = () => (
    <StyledIconWrapper>
      <StyledInnerWrapper selected={selected1}>
        <StyledHomeIcon
          selected={selected1}
          onClick={() => handleSelect(setSelected1, "/")}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={selected2}>
        <StyledHammerIcon
          selected={selected2}
          onClick={() => handleSelect(setSelected2, "/auctions")}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={selected3}>
        <StyledNotisIcon
          selected={selected3}
          onClick={() => handleSelect(setSelected3)}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={selected4}>
        <StyledMsgIcon
          selected={selected4}
          onClick={() => handleSelect(setSelected4)}
        />
      </StyledInnerWrapper>

      <StyledInnerWrapper selected={selected5}>
        <StyledAccountIcon
          selected={selected5}
          onClick={() => handleSelect(setSelected5, "/myPage")}
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
