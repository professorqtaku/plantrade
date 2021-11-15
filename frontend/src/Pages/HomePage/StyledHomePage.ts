import styled from "styled-components";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

interface WidthProps {
  width?: string | number | undefined;
}

interface GridProps {
  gridignore?: string;
}

export const StyledAvatar = styled(Avatar)`
  background: #619463;
  position: absolute;
  top: 0;
 right: 0;
 margin-top: 25px;
 margin-right: 25px;
`;
export const StyledUsername = styled.p`
  position: absolute;
  top: 5px;
  margin-left: 20px;
  color: white;
  font-size: 25px;
`;

export const StyledWrapper = styled.div`
  max-height: 80vh;
  display: grid;
  grid-template-rows: 25vh 1fr;
`;

export const StyledPageWrapper = styled.div`
      @media (min-width: 769px) {
    width: 75%;
    margin: 0 auto;
  }
`;

export const StyledSearchWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
`;

export const StyledImgFrame = styled.img`
  width: 92%;
  height: 75%;
  object-fit: cover;
  display: grid;
  align-items: center;
  margin: 0 auto;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  margin-top: 20px;

`;

export const StyledSearchFieldWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  position: absolute;
  top: 60%;
  left: 15%;
`;

export const StyledCarouselWrapper = styled.div`
  padding: 0 10px;
  width: 100;
  margin: 1rem 0 1rem 0;
  @media (min-width: 769px) {
    width: 60%;
    margin: 0 auto;
  }
`;

export const StyledIconImageItem = styled(Card)`
  display: grid;
  align-items: center;
  justify-items: center;
  background: #FFF;
  padding: 10px 15px 10px 15px;
  min-width: 60px;
  margin: 10px;
`;

export const StyledAuctionitem = styled(Card)`
  background: #FFF;
  margin: 25px 5px 0 5px;
`;

export const StyledText = styled.p`
  text-transform: uppercase;
  margin: 7px 0 0 0;
  font-size: 13px;
`;

export const StyledTitle = styled.p`
  font-size: 20px;
  letter-spacing: 1.5px;
  margin: 0 0 0 1rem;
`;

export const StyledCategoriesTitle = styled.p`
@media (min-width: 700px) {
  padding-top: 20px;
}

  font-size: 20px;
  letter-spacing: 1.5px;
  margin: 0 0 0 1rem;
`;


export const StyledIconImg = styled.img`
  width: 25px;
`;

export const StyledImgText = styled.p`
  position: absolute;
  margin-left: 25px;
  bottom: 150px;
`;

export const StyledImageListItem = styled(ImageListItem)<GridProps>`
  display: ${(props) => !props.gridignore ? 'grid' : 'block'};
  align-items: center;
  justify-items: center;
`;

export const StyledImageListItemBar = styled(ImageListItemBar)<WidthProps>`
  width: ${(props) => (props.width ? `${props.width}` : `90%`)};
  margin: 0 auto;
  border-radius: 0 0 3px 3px;
  display: grid;

  @media (min-width: 769px) {
    padding: 10px 1px 10px 10px;
  }
`;

export const StyledNewsImg = styled.img`
  width: 90%;
  border-radius: 3px;
`;

export const StyledAuctionImg = styled.img`
  height: 7rem;
  border-radius: 0 0 3px 3px;
`;

export const StyledNewsWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  margin-bottom: 20px;
`; 

export const StyledSoonEndingWrapper = styled.div`
  padding: 0 10px;
  display: grid;
  align-items: center;
  justify-items: center;
  margin-bottom: 80px;
`;

