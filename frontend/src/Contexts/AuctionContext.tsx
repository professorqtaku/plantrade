import { createContext, FC, useContext, useState } from "react";

type Props = {
  children?: JSX.Element;
};

export interface Host {
  id: Number;
  username: String;
}

export interface Auction {
  id: Number;
  host: Host;
  title: String;
  description: String;
  startPrice: Number;
  endDate: Date;
  status: Object;
}

export interface Bid {
  userId: Number;
  auctionId: Number;
  price: number | undefined;
  createdDate: Date;
}

export const AuctionContext = createContext<any>(null);

export const useAuction = () => useContext(AuctionContext);

const AuctionProvider: FC<Props> = ({ children }: Props) => {
  const [auctions, setAuctions] = useState<Array<Auction>>([]);

  const getAllAuctions = async () => {
    let res: Response = await fetch('/rest/auctions');
    let newAuctions: Array<Auction> = await res.json();
    setAuctions(newAuctions);
    return newAuctions;
  }

  const getAuctionById = async (id: Number) => {
    let res: Response = await fetch('/rest/auctions/' + id);
    let auction = await res.json();
    return auction;
  }

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
      getAllAuctions()
      console.log(bid);
    } else {
      console.log(res);
      console.log("Bad Request");
    }
    
  }
  
  const values = {
    auctions,
    setAuctions,
    getAllAuctions,
    getAuctionById,
    createBid
  }

  return (
    <AuctionContext.Provider value={values}>
      {children}
    </AuctionContext.Provider>
  )
}

export default AuctionProvider;