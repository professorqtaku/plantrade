import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import DeleteIcon from "@mui/icons-material/Delete";
import { SwipeableList } from "react-swipeable-list";

export const StyledWrapper = styled.div`
  width: 92%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  background: white;
  box-shadow: 0 3px 10px var(--shadow-color);
  margin-bottom: 1rem;
  padding: 0.5rem;
  &:first-child {
    margin-top: 0.3rem;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: grid;
  min-height: 3.8rem;
`;

export const StyledTitle = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

export const StyledLastMsg = styled.p`
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 20rem;
  margin: 0.5rem 0;
  font-weight: bolder;
`;

export const StyledName = styled.span`
  font-weight: bolder;
  padding-right: 5px;
`;

export const StyledAvatar = styled(Avatar)`
  background: var(--light-green);
`;

export const StyledBadge = styled(Badge)`
  color: var(--status-red);
  align-self: center;
  margin-right: 0.5rem;
`;

export const StyledSwipe = styled(SwipeableList)`
  height: auto;
`;

export const StyledDelete = styled.div`
  background: rgba(169, 0, 11, 0.47);
  height: 66.5px;
  margin-top: 5px;
  padding-top: 10px;
`;

export const StyledTrashCan = styled(DeleteIcon)`
  color: white;
  margin: 0;
  margin-top: 0.5rem;
  margin-left: 1rem;
  width: 20px;
`;

export const StyledDeleteText = styled.p`
  font-size: 0.85rem;
  color: white;
  margin: 0;
  margin-left: 0.5rem;
`;
