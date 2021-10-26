import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import  { useAuction } from '../../Contexts/AuctionContext';

import {
  StyledWrapper
} from "./StyledAuctionDetailPage";


const AuctionDetailPage = () => {
  const { id }: any = useParams();
  const { getAuctionById } = useAuction();

  useEffect(() => {
    handleGetAuctionById();
  }, [])

  const handleGetAuctionById = async () => {
    const res = await getAuctionById(id);
    console.log(res, 'what do we get here')
  }


  return (
    <StyledWrapper>
      <h3>AuctionDetailPage</h3>
      <h2>Id:</h2> <p>{id}</p> 
    </StyledWrapper>
  );
}

export default AuctionDetailPage;