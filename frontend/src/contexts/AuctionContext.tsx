import { createContext, useContext, useState } from "react";

const defaultState = {
  auctions: []
}

const AuctionContext = createContext(defaultState);

export const useAuction = () => useContext(AuctionContext);

const AuctionProvider = ({ children }: any) => {
  const [auctions, setAuctions] = useState(defaultState.auctions);

  const values = {
    auctions,
    setAuctions
  }

  return (
    <AuctionContext.Provider value={values}>
      {children}
    </AuctionContext.Provider>
  )
}

export default AuctionProvider;