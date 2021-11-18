import { createContext, FC, useContext, useState } from "react";
import {
  SearchObject,
  Status,
  status,
  sortByTimes,
  SortByTimes,
} from "../Utils/types";
import { Auction, Category } from "../Interfaces/Interfaces";

type Props = {
  children?: JSX.Element;
};

const SearchContext = createContext<any>(null);

export const useSearch = () => useContext(SearchContext);

const SearchContextProvider: FC<Props> = ({ children }: Props) => {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedSortTime, setSelectedSortTime] = useState<SortByTimes>(
    sortByTimes[2]
  );
  const [selectedStatus, setSelectedStatus] = useState<Status>(status[0]);
  const [isRerender, setIsRerender] = useState(false);
  const [noContent, setNoContent] = useState(false);
  const [lastItem, setLastItem] = useState(false);

  const clearFilter = () => {
    setSearchText("");
    setSelectedCategories([]);
    setSelectedStatus(status[0]);
    setSelectedSortTime(sortByTimes[2]);
    setIsRerender(!isRerender);
    setSelectedSortTime(sortByTimes[2]);
    setAuctions([]);
    getAuctionsByOptions();
  };

  const getAuctionsByOptions = async (
    pageNumber?: number,
    search?: SearchObject
  ) => {
    const page = pageNumber ?? 0;
    let auctionResult: Array<Auction> = [];

    const option: SearchObject = {
      title: search?.title ? search?.title : searchText,
      sort: search?.sort ? search?.sort : selectedSortTime,
      categories: search?.categories ? search.categories : selectedCategories,
      status: search?.status ? search?.status : selectedStatus,
      page,
    };

    console.log('what is pagenumber in search context', pageNumber);
    console.log('what is option', option)

    let categoryQuery: string = getCategoryQuery(option.categories);
    let statusQuery: string = getStatusQuery(option.status);
    let sortQuery: string = getSortQuery(option.sort);
    let bla = `/api/auctions/search?title=${option.title}${categoryQuery}${statusQuery}&page=${option.page}${sortQuery}`;
    console.log('what is query', bla)

    let res: Response = await fetch(
      `/api/auctions/search?title=${option.title}${categoryQuery}${statusQuery}&page=${option.page}${sortQuery}`
    );
    if (res.ok && res.status == 200) {
      let newAuctions: Array<Auction> = await res.json();
      console.log('what is await res json', newAuctions)
      let updateAuctionslist: Array<Auction> =
        option.page === 0 ? auctionResult : Object.assign([], auctions);
      setAuctions([...updateAuctionslist, ...newAuctions]);
      setNoContent(false);
      setLastItem(false);
    }
    if (res.status === 204) {
      if (option.page === 0) {
        setNoContent(true);
        setAuctions(auctionResult);
        setLastItem(false);
      } else if (auctions.length > 0) {
        setLastItem(true);
      }
    }
  };

  const getSortQuery = (sort: SortByTimes | any) => {
    let query: string = "";
    if (sort.sort !== "none") {
      query = `&sort=${sort.sort}`;
    }
    return query;
  };

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
    auctions,
    setAuctions,
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
    isRerender,
    noContent,
    lastItem,
    setNoContent
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
