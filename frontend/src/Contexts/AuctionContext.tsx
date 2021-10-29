import { createContext, FC, useContext, useState } from "react";

type Props = {
  children?: JSX.Element;
};

type Auction = {
  id: Number;
  host: { id: Number, username: String };
  title: String;
  description: String;
  startPrice: Number;
  endDate: Date;
  status: String;
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

  const createAuction = async (auction: Auction) => {
    const content = {
      auction,
      categories: {
        id: 58,
        name: 'hey'
      }
    }

    let res: Response  = await fetch('/rest/auctions', {
      method: 'POST',
      body: JSON.stringify(content),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const auctionResponse = await res.json();
    return null;
  }
  
  const values = {
    auctions,
    setAuctions,
    getAllAuctions,
    getAuctionById,
    createAuction
  }

  return (
    <AuctionContext.Provider value={values}>
      {children}
    </AuctionContext.Provider>
  )
}

export default AuctionProvider;