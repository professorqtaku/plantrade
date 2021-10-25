import styled from "styled-components";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";

export const StyledCard = styled(Card)`
  max-width: 90%;
  height: 25vh;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 35% 1fr;
`;

export const StyledCardContent = styled(CardContent)`
  display: grid;
  grid-template-rows: 30% 1fr 20%;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledTitle = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 0.3rem;
`;

export const StyledDesc = styled.p`
  font-size: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 0;
`;

export const StyledAvatar = styled(Avatar)`
  background: #619463;
  float: right;
`;

export const StyledButton = styled.button`
  background: #619463;
  color: white;
  border: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 0.5rem;
`;
