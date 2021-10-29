import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { StyledImage, StyledPaper } from '../../Pages/AuctionDetailPage/StyledAuctionDetailPage';


function ImageCarousel(images:any) {


  // REMOVE WHEN IMAGES COME FROM AUCTION - ONLY MOCKUP
  images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    path:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    path:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    path:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Goč, Serbia',
    path:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  ];
  
  console.log('this is images', images);
  
  
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
  console.log('this is props', props)
    return (
      <StyledPaper>
            <StyledImage><img src={props.item.path}></img></StyledImage>
      </StyledPaper>
    )
}

export default ImageCarousel;

