import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";

export const StyledWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  background: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-bottom: 1rem;
  padding: 0.5rem;
  &:first-child {
    margin-top: 0.3rem;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: grid;
`

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
`;

export const StyledName = styled.span`
  font-weight: bolder;
`;

export const StyledAvatar = styled(Avatar)`
  background: var(--chat-green);
`;

export const StyledBadge = styled(Badge)`
  color: var(--status-red);
  align-self: center;
  margin-right: 0.5rem;
`;

export const StyledSwipe = styled(SwipeableList)`
  height: auto;
`;

export const StyledSwipeList = styled(SwipeableListItem)`

`;

export const StyledSwipeAction = styled(SwipeAction)`

`;

export const StyledDelete = styled.div`
  background: rgba(169, 0, 11, 0.47);
  height: 78px;
  margin-top: 5px;
`;
