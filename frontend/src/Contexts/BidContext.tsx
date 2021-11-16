import { createContext, FC, useContext, useState } from 'react'
import { Bid } from "../Interfaces/Interfaces"


type Props = {
  children?: JSX.Element;
};

const BidContext = createContext<any>(null);

export const useBid = () => useContext(BidContext);

const BidContextProvider: FC<Props> = ({ children }: Props) => {
  console.log("---10. BID CONTEXT----");

  const [highestBid, setHighestBid] = useState();

  const createBid = async (newBid: Bid) => {
    let res: Response = await fetch("/api/bid", {
      method: "POST",
      body: JSON.stringify(newBid),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status == 200) {
      let bid = await res.json();
      return bid;
    } else {
      return null;
    }
  };

  const getHighestBid = async (id: Number) => {
    let res: Response = await fetch(`/api/${id}/highest-bid`);

    if (res.status == 200) {
      let data = await res.json();
      setHighestBid(data.price);
    } else {
      console.log("opsi, something went wrong");
      // add toaster saying something went wrong
    }
  };

  const value = {
    createBid,
    getHighestBid,
    highestBid,
  };

  return <BidContext.Provider value={value}>{children}</BidContext.Provider>;
};

export default BidContextProvider;
