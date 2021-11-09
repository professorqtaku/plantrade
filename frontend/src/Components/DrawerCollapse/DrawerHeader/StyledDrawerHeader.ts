import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const StyledHeader = styled.div`
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledExpandIcon = styled(ExpandMoreIcon)`
  align-self: center;
  justify-self: center;
`;

export const StyledText = styled.p`
  align-self: center;
  
`;
