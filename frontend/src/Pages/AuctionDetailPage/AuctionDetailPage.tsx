import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import {
  StyledWrapper
} from "./StyledAuctionDetailPage";


const AuctionDetailPage = () => {
  const { id }: any = useParams();
  return (
    <StyledWrapper>
      <h3>AuctionDetailPage</h3>
      <h2>Id:</h2> <p>{id}</p> 
    </StyledWrapper>
  );
}

export default AuctionDetailPage;