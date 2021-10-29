import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

interface TextProps {
  color?: string;
  size?: string;
  margin?: string;
}

interface BoxProps {
  justify: string;
  background: string;
}

export const StyledWrapper = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: grid;
`;

export const StyledAvatar = styled(Avatar)`
  background: var(--light-green);
  justify-self: end;
  margin: 1rem;
`;

export const StyledEdit = styled(EditIcon)`
  color: var(--light-green);
`;

export const StyledCheck = styled(DoneIcon)`
  color: var(--light-green);
`;

export const StyledAvatarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
  background-image: url("https://i.pinimg.com/564x/f8/2a/c0/f82ac0c390529f0a96d975c6b6f7c997.jpg");
  height: 8rem;
`;

export const StyledEditWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const StyledBoldText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  `;

export const StyledText = styled.span<TextProps>`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  font-style: italic;
  letter-spacing: 2px;
  font-family: var(--font-title);
`;

export const StyledSpanText = styled.span<TextProps>`
  letter-spacing: 2px;
`;

export const StyledNavigationWrapper = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

export const StyledNavigationBox = styled.div<BoxProps>`
  width: 11rem;
  height: 11rem;
  background-image: ${(props) =>
    props.background && `url(${props.background})`};
  justify-self: ${(props) => props.justify && props.justify};
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const StyledCheckWrapper = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  background: white;
  color: black;
  outline: none;
  font-size: 1rem;
  width: 50%;
`;

export const StyledButton = styled.button`
  background: white;
  border: 1px solid var(--light-green);
  color: black;
  padding: 0.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: var(--font-text);
  border-radius: 0.4rem;
`;
