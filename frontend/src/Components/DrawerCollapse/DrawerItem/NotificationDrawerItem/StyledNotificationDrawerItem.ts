import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { Badge, Typography, Grid } from "@mui/material";
import { SwipeableList } from "react-swipeable-list";

interface Props {
  color?: string;
}

export const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  background: white;
  margin-bottom: 0.1rem;
  padding: 1.5rem 1rem;
  box-shadow: 0 5px 20px var(--shadow-color);
  &:first-child {
    margin-top: 0.3rem;
  }
`;

export const StyledInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 9fr 2fr;
`;

export const StyledTitle = styled(Typography)`
  font-family: var(--font-small-text);
  font-size: small;
`;

export const StyledAuctionGrid = styled(Grid)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledAuctionTitle = styled(Typography)`
  font-family: var(--font-small-text);
  font-size: small;
  font-weight: bold;
  color: var(--blue);
  text-decoration: underline;
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

export const StyledGridContainer = styled(Grid)`
`;


export const StyledColoredText = styled.span<Props>`
  color: ${props => props.color};
  font-weight: bold;
`;
