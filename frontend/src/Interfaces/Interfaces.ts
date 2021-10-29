export interface User {
  id: Number,
  username: String,
}

export interface Auction {
  id: Number,
  title: String,
  description: String,
  startPrice?: Number,
  status?: String,
  endDate?: String,
  host?: User,
  bids?: [Bid],
  categories?: [Category],
  images?: [Image],
  winner?: User
}

export interface Bid {
  id: Number,
  createdDate: Date,
  price: Number,
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