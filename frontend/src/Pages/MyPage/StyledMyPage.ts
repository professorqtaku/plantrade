import styled from "styled-components";
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
