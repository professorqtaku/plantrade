import React, { createContext, FC, useContext, useState } from 'react'
import { useAuction } from "./AuctionContext"
import { Bid } from "../Interfaces/Interfaces"


type Props = {
  children?: JSX.Element;
};

const BidContext = createContext<any>(null);

export const useBid = () => useContext(BidContext);

const BidProvider: FC<Props> = ({ children }: Props) => {
  const [highestBid, setHighestBid] = useState();

  // const { getAllAuctions } = useAuction();

    const createBid = async (newBid: Bid) => {
    let res: Response = await fetch('/api/bid', {
      method: 'POST',
      body: JSON.stringify(newBid),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      
      console.log('what is res', res)

    if (res.status == 200) {
      let bid = await res.json();
      // getAllAuctions();
      console.log(bid);
      return bid;
    } else {
      console.log(res);
      console.log("Bad Request");
      return null;
    }
  }

  const getHighestBid = async (id: Number) => {
    let res: Response = await fetch(`/api/${id}/highest-bid`);

    if (res.status == 200) {
      let data = await res.json();
      setHighestBid(data.price);
    } else {
      console.log('opsi, something went wrong');
      // add toaster saying something went wrong
    }
  }

  const value = {
    createBid,
    getHighestBid,
    highestBid
  };


  return (
    <BidContext.Provider value={value}>
      {children}
    </BidContext.Provider>
  )
}

export default BidProvider
