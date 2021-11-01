import styled from "styled-components";
import CommentIcon from '@mui/icons-material/Comment';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';


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

export const StyledBidBtn = styled.div`
  text-align: center;
  background-color: var(--light-green);
  color: var(--dark-green);
  padding: 0.8rem;
  border-radius: 30px;
  cursor: pointer;
  font-family: var(--font-title);
  font-size: 1.5rem;
  font-weight: 700;
`;

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
  display:flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 1rem;
  cursor: pointer;
`;

export const StyledChat = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  background-color: white;
  border-radius: 50%;
  padding: 20px;
  margin: -50px 0 0 0;
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

export const StyledCalendarTodayOutlinedIcon = styled(CalendarTodayOutlinedIcon)`
  margin-right: 5px;
  font-size: 1rem;
`;

export const StyledParagraph = styled.p`
  line-height: 1.2rem;
  font-size: 1rem;
  margin: 16px 0 0;
`;

// REMOVE & use carusel instead
export const StyleImg = styled.img`
  height: 32vh;
  width: 100%;
`;
