import styled from "styled-components"
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Divider from "@mui/material/Divider";


export const StyledLoginContainer = styled.div``;

export const Styledh3 = styled.p`
  text-align: center;
  font-size: 20px;
  letter-spacing: 1.5px;
`;

export const StyledForm = styled.form`
  width: 230px;
  margin: 0 auto;
`;

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 12% 1fr;
`;

export const StyledLoginBtn = styled.button`
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: #619463;
  color: white;
  padding: 10px;
  margin-top: 15px;
  width: 200px;
  align-items: center;
  margin-left: 25px;
  font-size: px;
`;

export const StyledText = styled.p`
  font-size: 1rem;
  letter-spacing: 2px;
  padding-top: 40px;
  text-align: center;
`;

export const StyledPorfileIcon = styled(PersonIcon)`
  width: 20px;
  color: grey;
  margin-top: 15px;
`;

export const StyledPwIcon = styled(VpnKeyIcon)`
  width: 20px;
  color: grey;
  margin-top: 25px;
`;
export const StyledSpan = styled.span`
  color: #006fd0;
`;

export const StyledDivider = styled(Divider)`
  margin-top: 35px;
  min-width: 100%;
  position: absolute;
  left: 0;
`;