import styled from "styled-components";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";

export const StyledCard = styled(Card)`
  height: 100%;
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 35% 1fr;


  @media (min-width: 769px) {
    width: auto;
    height: 100%;
    max-height: 202.5px;
  }
`;

export const StyledCardContent = styled(CardContent)`
  display: grid;
  grid-template-rows: 35% 1fr auto;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  :hover {
    cursor: pointer;
  }
`;

export const StyledImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledTitle = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 0.3rem;
  padding-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledDesc = styled.p`
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-top: 0;
`;

export const StyledAvatar = styled(Avatar)`
  background: var(--light-green);
  float: right;
`;

export const StyledSpan = styled.span`
  font-weight: bolder;
`;

export const StyledDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
