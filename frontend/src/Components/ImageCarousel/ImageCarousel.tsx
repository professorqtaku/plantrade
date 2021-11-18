import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { StyledImage, StyledPaper } from '../../Pages/AuctionDetailPage/StyledAuctionDetailPage';


function ImageCarousel(images:any) {
  return (
    <Carousel
      NextIcon={<NavigateNextIcon />}
      PrevIcon={<NavigateBeforeIcon />}
      autoPlay={false}>
        {images.map((image:any, i:number) => <Item key={i} item={image} /> )}
      </Carousel>
  )
}

function Item(props:any)
{
    return (
      <StyledPaper>
            <StyledImage><img src={props.item.path}></img></StyledImage>
      </StyledPaper>
    )
}

export default ImageCarousel;

