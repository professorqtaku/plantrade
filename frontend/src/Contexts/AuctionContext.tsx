import { createContext, FC, useContext, useState, useEffect } from "react";
import { Auction, Category } from '../Interfaces/Interfaces';

type Props = {
  children?: JSX.Element;
};

export const AuctionContext = createContext<any>(null);

export const useAuction = () => useContext(AuctionContext);

const AuctionContextProvider: FC<Props> = ({ children }: Props) => {
  const [auctions, setAuctions] = useState<Array<Auction>>([]);
  const [usersAuctions, setUsersAuctions] = useState<Array<Auction>>();
  const [usersWonAuctions, setUsersWonAuctions] = useState<Array<Auction>>();

  // useEffect(() => {
  //   getAllAuctions();
  // }, []);

  // const getAllAuctions = async () => {
  //   let res: Response = await fetch("/rest/auctions");
  //   let newAuctions: Array<Auction> = await res.json();
  //   setAuctions(newAuctions);
  //   return newAuctions;
  // };

  const getAuctionById = async (id: Number) => {
    let res: Response = await fetch("/rest/auctions/" + id);
    let auction = await res.json();
    return auction;
  };

  const createAuction = async (
    auction: Auction,
    categories: Category[],
    formData: FormData
  ) => {
    // must clean formdata first before appending categories
    formData.delete("auction");
    formData.delete("categories");

    formData.append("auction", JSON.stringify(auction));
    formData.append("categories", JSON.stringify(categories));

    let res: Response = await fetch("/rest/auctions", {
      method: "POST",
      body: formData,
    });
    const auctionResponse = await res.json();
    console.log(auctionResponse, "what is here");
    return auctionResponse;
  };
  const getUsersAuctions = async () => {
    let res: Response = await fetch("/rest/auctions/user");
    if (res.status === 200) {
      let auctions = await res.json();
      setUsersAuctions(auctions);
    }
  }

  const getWonAuctionsByUser = async () => {
    let res: Response = await fetch("/rest/auctions/won");
    if (res.status === 200) {
      let auctions = await res.json();
      setUsersWonAuctions(auctions);
    }
  };

  const values = {
    getAuctionById,
    createAuction,
    usersAuctions,
    getUsersAuctions,
    getWonAuctionsByUser,
    usersWonAuctions,
  };

  return (
    <AuctionContext.Provider value={values}>{children}</AuctionContext.Provider>
  );
};

export default AuctionContextProvider;