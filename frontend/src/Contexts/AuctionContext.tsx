import { createContext, FC, useContext, useState, useEffect } from "react";

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



export const AuctionContext = createContext<any>(null);

export const useAuction = () => useContext(AuctionContext);

const AuctionProvider: FC<Props> = ({ children }: Props) => {
  const [auctions, setAuctions] = useState<Array<Auction>>([]);
  const [usersAuctions, setUsersAuctions] = useState<Array<Auction>>();
  const [usersWonAuctions, setUsersWonAuctions] = useState<Array<Auction>>();

  useEffect(() => {
    getAllAuctions();
  },[]);

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

  const getUsersAuctions = async () => {
    let res: Response = await fetch('/rest/auctions/user');
    if (res.status === 200) {
      let auctions = await res.json();
      setUsersAuctions(auctions);
    }
    // return auctions;
  }

  const getWonAuctionsByUser = async () => {
    let res: Response = await fetch('/rest/auctions/won');
    if (res.status === 200) {
      let auctions = await res.json();
      setUsersWonAuctions(auctions);
    }
  }
  
  const values = {
    auctions,
    setAuctions,
    getAllAuctions,
    getAuctionById,
    usersAuctions,
    getUsersAuctions,
    getWonAuctionsByUser,
    usersWonAuctions
  }

  return (
    <AuctionContext.Provider value={values}>
      {children}
    </AuctionContext.Provider>
  )
}

export default AuctionProvider;