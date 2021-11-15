import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { Badge, Typography } from "@mui/material";
import { SwipeableList } from "react-swipeable-list";

export const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  background: white;
  margin-bottom: 0.1rem;
  padding: 1.5rem 1rem;
  &:first-child {
    margin-top: 0.3rem;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr 2fr;
`;

export const StyledTitle = styled(Typography)`
  font-family: var(--font-small-text);
  font-size: small;
`;

export const StyledAuctionTitle = styled(Typography)`
  font-family: var(--font-small-text);
  font-size: small;
  font-weight: bold;
  color: var(--blue);
  text-decoration: underline;
  width: 100px;
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
  height: 78px;
  margin-top: 5px;
`;

export const StyledTrashCan = styled(DeleteIcon)`
  color: white;
  margin: 0;
  margin-top: 1rem;
  margin-left: 1rem;
`;

export const StyledDeleteText = styled.p`
  font-size: 1rem;
  color: white;
  margin: 0;
  margin-left: 0.5rem;
`;