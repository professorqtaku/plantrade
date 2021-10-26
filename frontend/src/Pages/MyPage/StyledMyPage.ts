import styled from "styled-components";
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export const StyledWrapper = styled.div`
  
`;

export const Styledh3 = styled.h3`
  text-align: center;
`;

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 12% 1fr;

`;

export const StyledForm = styled.form`
width: 220px;
margin: 0 auto;
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
   display: flex;
   flex-direction: column;
   font-size: 17px;
  &:focus{
    border-bottom: 1px solid darkgreen;
  }
`;

export const StyledLoginBtn = styled.button`
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: #FFE600;
  padding: 5px;
  margin-top: 15px;
  width: 200px; 
  align-items: center;
  margin-left: 25px;
  font-size: 15px;
`;

export const StyledPorfileIcon = styled(PersonIcon)`
  width: 20px;
  color: grey;
`;

export const StyledPwIcon = styled(VpnKeyIcon)`
  width: 20px;
  color: grey;
  
`;