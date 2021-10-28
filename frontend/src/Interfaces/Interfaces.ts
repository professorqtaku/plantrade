export interface Host {
  id: number,
  username: String,
  email: String,
  password: String,
}

export interface Auction {
  id: number,
  title: String,
  description: String,
  startPrice?: number,
  status?: String,
  endDate?: String,
  host?: Host,
  bids?: Bid,
}

export interface Bid {
  id: number,
  createdDate: Date,
  price: number,
  auctionId: number,
  userId: number
}