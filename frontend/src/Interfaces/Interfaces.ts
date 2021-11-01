export interface User {
  id: Number,
  username: String,
}

export interface Auction {
  id: number | null | undefined,
  title: String,
  description: String,
  startPrice?: number | undefined,
  status?: String,
  endDate: string | number | Date,
  host?: User,
  bids?: Array<Bid> | undefined,
  categories?: [Category],
  images?: [Image],
  winner?: User
}

export interface Bid {
  id: Number,
  createdDate: Date,
  price: number | undefined,
  auctionId: Number,
  userId: Number
}

export interface Category {
  id: Number,
  name: String
}

export interface Image {
  id: Number,
  path: String,
  auctionId: Number
}