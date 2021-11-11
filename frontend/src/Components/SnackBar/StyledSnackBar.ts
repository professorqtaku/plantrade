import styled from 'styled-components'
import { Card, CardActions } from "@mui/material";

interface Props {
  colour?: string;
}

export const StyledCard = styled(Card)<Props>`
  background-color: ${props => props.colour ? props.colour : "var(--status - green"};
  color: white;
  width: 100%;
  max-width: 500px;
`;

export const StyledCardActions = styled(CardActions)`
  justify-content: space-between;
`;