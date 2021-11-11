import styled from 'styled-components'
import { Card, CardActions } from "@mui/material";

export const StyledCard = styled(Card)`
  background-color: var(--light-green);
  color: white;
  width: 100%;
  max-width: 500px;
`

export const StyledCardActions = styled(CardActions)`
  justify-content: space-between;
`;