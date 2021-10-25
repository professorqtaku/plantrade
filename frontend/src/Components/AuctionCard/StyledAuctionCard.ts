import styled from "styled-components";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

export const StyledCard = styled(Card)`
  max-width: 90%;
  height: 25vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 35% 1fr;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledTitle = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`

export const StyledDesc = styled.p`
  font-size: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const StyledAvatar = styled(Avatar)`
  background: #619463;
  float: right;
`;
