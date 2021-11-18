import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

interface TextProps {
  isright: boolean;
}

export const StyledHeader = styled.div`
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StyledExpandIcon = styled(ExpandMoreIcon)`
  align-self: center;
  justify-self: center;
  font-size: 2.2rem;
`;

export const StyledTextWrapper = styled.div`
  display: grid;
  grid-template-columns: 1rem 1fr;
  margin-left: 0.5rem;
`

export const StyledGoBackIcon = styled(KeyboardArrowLeftIcon)`
  align-self: center;
  font-size: 1.5rem;
`;


export const StyledText = styled.p<TextProps>`
  font-size: 1.1rem;
  align-self: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 7rem;
  justify-self: ${(props) => (props.isright ? "end" : "start")};
  margin: 0;
  margin: ${(props) => (props.isright ? "0 0.5rem 0 0" : "0 0 0 0.5rem ")};
`;

export const StyledAmountOfMsg = styled.span`
  color: red;
`