export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface Auction {
  id: number;
  title: string;
  description: string;
  startPrice?: number;
  status?: string;
  endDate?: string;
  host?: User;
  bids?: Array<Bid> | undefined;
  categories?: [Category];
  images?: [Image];
  winner?: User;
}

export interface Bid {
  id: number;
  createdDate: Date;
  price: number;
  auctionId: number;
  userId: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface Image {
  id: number;
  path: string;
  auctionId: number;
}
