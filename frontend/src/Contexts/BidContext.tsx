import React, { createContext, FC, useContext } from 'react'
import { useAuction } from "./AuctionContext"

type Props = {
  children?: JSX.Element;
};

export interface Bid {
  userId: Number;
  auctionId: Number;
  price: number | undefined;
  createdDate: Date;
}

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
    } else {
      console.log(res);
      console.log("Bad Request");
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
