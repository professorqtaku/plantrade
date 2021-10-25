import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import GavelIcon from "@mui/icons-material/Gavel";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

interface NavProps {
  selected: boolean;
}

export const StyledAppBar = styled(AppBar)`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #122522;
  max-height: 4rem;
`;

export const StyledIconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  height: 3rem;
  align-items: center;
`;

export const StyledInnerWrapper = styled.div<NavProps>`
  margin-bottom: ${(props) => props.selected && "1.5rem"};
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 130%;
  background: ${(props) => props.selected && "#122522"};
  border-radius: 100%;
`;

export const StyledHomeIcon = styled(HomeIcon)<NavProps>`
  color: ${(props) => props.selected && "#FFE600"};
  cursor: pointer;
`;

export const StyledHammerIcon = styled(GavelIcon)<NavProps>`
  color: ${(props) => props.selected && "#FFE600"};
  cursor: pointer;
`;

export const StyledNotisIcon = styled(NotificationsIcon)<NavProps>`
  color: ${(props) => props.selected && "#FFE600"};
  cursor: pointer;
`;

export const StyledMsgIcon = styled(EmailIcon)<NavProps>`
  color: ${(props) => props.selected && "#FFE600"};
  cursor: pointer;
`;

export const StyledAccountIcon = styled(AccountBoxIcon)<NavProps>`
  color: ${(props) => props.selected && "#FFE600"};
  cursor: pointer;
`;
