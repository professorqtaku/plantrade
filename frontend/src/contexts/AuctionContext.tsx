import { createContext, useContext, useState } from "react";

const defaultState = {
  auctions: []
}

const AuctionContext = createContext(defaultState);

export const useAuction = () => useContext(AuctionContext);

const AuctionProvider = ({ children }: any) => {
  const [auctions, setAuctions] = useState(defaultState.auctions);

  const getAllAuctions = async () => {
    let res: Response = await fetch('/rest/auctions');
    let newAuctions = await res.json();
    setAuctions(newAuctions);
    return newAuctions;
  }


  const values = {
    auctions,
    setAuctions,
    getAllAuctions
  }

  return (
    <AuctionContext.Provider value={values}>
      {children}
    </AuctionContext.Provider>
  )
}

export default AuctionProvider;