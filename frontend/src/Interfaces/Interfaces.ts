export interface User {
  id: Number,
  username: String,
}

export interface Auction {
  id: number,
  title: String,
  description: String,
  startPrice?: number,
  status?: String,
  endDate?: Date,
  host?: User,
  bids?: Array<Bid> | undefined ,
  categories?: [Category],
  images?: [Image],
  winner?: User
}

export interface Bid {
  id?: Number,
  createdDate: Date,
  price: number,
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