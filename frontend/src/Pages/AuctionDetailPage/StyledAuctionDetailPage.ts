import styled from "styled-components";
import CommentIcon from "@mui/icons-material/Comment";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Carousel from "react-elastic-carousel";
import { Button } from "@mui/material"


export const StyledWrapper = styled.div`
  margin: 1.5rem 1rem 5rem;
`;

export const StyledPrice = styled.h3`
  text-align: center;
  color: var(--dark-green);
  margin: 0;
  font-size: 1.7rem;
  font-weight: 600;
  letter-spacing: 0.7px;
  font-family: var(--font-title);
`;

export const StyledPriceTitle = styled(StyledPrice)`
  font-size: 0.9rem;
  line-height: 14px;
  text-transform: uppercase;
`;

export const StyledWarning = styled.p`
  font-size: 1.3rem;
  margin: 0;
`

export const StyledWarningPrice = styled.span`
  color: crimson;
`

export const StyledImage = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
`;

export const StyledPaper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-title);
  margin: 0 0 0px;
`;

export const StyledUnderTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 600;
  font-family: var(--font-title);
  line-height: 2px;
  letter-spacing: 0.9px;
  text-transform: uppercase;
`;

export const StyledBackBtn = styled(StyledUnderTitle)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 1rem;
  cursor: pointer;
`;

export const StyledChatWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  max-width: 500px;
`;

export const StyledChat = styled(Button)`
  z-index: 1;
  background-color: var(--background-color);
  border-radius: 50%;
  padding: 20px;
  margin: -50px 0 0 0;
  right: 0;
  :hover {
    background-color: white;
  }
`;

export const StyledChatIcon = styled(CommentIcon)`
  font-size: 2.5rem;
  color: var(--light-green);
`;

export const StyledDate = styled.span`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: var(--font-title);
`;

export const StyledAccessTimeOutlinedIcon = styled(AccessTimeOutlinedIcon)`
  margin-right: 5px;
  font-size: 1rem;
`;

export const StyledCalendarTodayOutlinedIcon = styled(
  CalendarTodayOutlinedIcon
)`
  margin-right: 5px;
  font-size: 1rem;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem auto;
  margin-left: 16px;
  grid-gap: 10px;
`;

export const StyledCarousel = styled(Carousel)`
display: grid;
`;

export const StyledImg = styled.img`
  width: 100%;
`;

export const StyledParagraph = styled.p`
  text-align: center;
`;