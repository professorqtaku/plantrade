import styled from "styled-components";
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Divider from '@mui/material/Divider';


export const StyledLoginContainer = styled.div`

`;

export const StyledRegisterContainer = styled.div`

`;

export const Styledh3 = styled.p`
  text-align: center;
  font-size: 20px;
  letter-spacing: 1.5px;
`;

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 12% 1fr;
`;

export const StyledForm = styled.form`
width: 230px;
margin: 0 auto;
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

export const StyledPorfileIcon = styled(PersonIcon)`
  width: 20px;
  color: grey;
  margin-top: 15px;
`;

export const StyledPwIcon = styled(VpnKeyIcon)`
  width: 20px;
  color: grey;
  margin-top: 15px;
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
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";

export const StyledWrapper = styled.div`
  width: 90%;
  margin: 1rem auto;
`;

export const StyledAvatar = styled(Avatar)`
  background: #619463;
`;

export const StyledEdit = styled(EditIcon)`
  color: #619463;
`;

export const StyledAvatarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
`;

export const StyledEditWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

export const StyledText = styled.span`
  font-size: 1rem;
  letter-spacing: 2px;
  padding-top: 40px;
`;

export const StyledBoldText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const StyledNavigationWrapper = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-gap: 1rem;
`;
