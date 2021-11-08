import React, { createContext, FC, useContext } from 'react'
import { useAuction } from "./AuctionContext"
import { Bid } from "../Interfaces/Interfaces"


type Props = {
  children?: JSX.Element;
};

const BidContext = createContext<any>(null);

export const useBid = () => useContext(BidContext);

const BidProvider: FC<Props> = ({ children }: Props) => {
  const { getAllAuctions } = useAuction();

    const createBid = async (newBid: Bid) => {
    let res: Response = await fetch('/api/bid', {
      method: 'POST',
      body: JSON.stringify(newBid),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (res.status == 200) {
      let bid = await res.json();
      getAllAuctions();
      console.log(bid);
      return bid;
    } else {
      console.log(res);
      console.log("Bad Request");
      return null;
    }
  }

  const value = {
    createBid
  };


  return (
    <BidContext.Provider value={value}>
      {children}
    </BidContext.Provider>
  )
}

export default BidProvider
