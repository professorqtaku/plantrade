import React, { createContext, FC, useContext, useState } from "react";
import { SearchObject, Status, status, sortByTimes, SortByTimes } from "../Utils/types";
import { Auction, Category } from "../Interfaces/Interfaces";

type Props = {
  children?: JSX.Element;
};

const SearchContext = createContext<any>(null);

export const useSearch = () => useContext(SearchContext);

const SearchProvider: FC<Props> = ({ children }: Props) => {

  const [auctions, setAuctions] = useState<Auction[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedSortTime, setSelectedSortTime] = useState<SortByTimes>(sortByTimes[2]);
  const [selectedStatus, setSelectedStatus] = useState<Status>(status[0]);
  const [isRerender, setIsRerender] = useState(false);

  const clearFilter = () => {
    setSearchText("");
    setSelectedCategories([]);
    setSelectedStatus(status[0]);
    setIsRerender(!isRerender);
  }

  const getAuctionsByOptions = async (page: number) => {
    const option: SearchObject = {
      title: searchText,
      sort: selectedSortTime,
      categories: selectedCategories,
      status: selectedStatus,
      page
    };

    console.log("what is options page", option.page);

    let categoryQuery: string = getCategoryQuery(option.categories);
    let statusQuery: string = getStatusQuery(option.status);
    let sortQuery: string = getSortQuery(option.sort);

    let res: Response = await fetch(
      `/api/auctions/search?title=${option.title}${categoryQuery}${statusQuery}&page=${option.page}${sortQuery}`
    );
    console.log("what is res", res);
    if (res.ok && res.status == 200) {
      let newAuctions: Array<Auction> = await res.json();
      console.log("what is new Auctions?", newAuctions);
      if (option.page === 0 || !auctions || !auctions.length) {
        setAuctions(newAuctions);
      } else if (auctions) {
        let updateAuctionslist: Auction[] = auctions;
        for (let auction of newAuctions) {
          updateAuctionslist.push(auction);
        }
        setAuctions(updateAuctionslist);
      }
    } else if (res.status === 204) {
      console.log("no more content");
    }
  };

  const getSortQuery = (sort: SortByTimes | any) => {
    let query: string = "";
    if (sort.sort !== 'none') {
      query =`&sort=${sort.sort}`
    }
    return query;
  }

  const getCategoryQuery = (categories: Category[] | any) => {
    let query: string = "";
    if (categories) {
      for (let cat of categories) {
        if (query.length <= 0) {
          query = `&category=${cat.name}`;
        } else {
          query += encodeURI(` ${cat.name}`);
        }
      }
    }
    return query;
  };

  const getStatusQuery = (status: Status | any) => {
    let query: string = "";
    if (status) {
      query = "&status=" + encodeURI(status.status);
    }
    return query;
  };



  const value = {
    clearFilter,
    searchText,
    setSearchText,
    selectedCategories,
    setSelectedCategories,
    selectedSortTime,
    setSelectedSortTime,
    selectedStatus,
    setSelectedStatus,
    getAuctionsByOptions,
    auctions,
    setAuctions,
    isRerender,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
