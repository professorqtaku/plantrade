export type Auction = {
  id: Number;
  host: { id: Number; username: String };
  title: String;
  description: String;
  startPrice: Number;
  endDate: Date;
  status: Object;
};

export type SearchObject = {
  title: string,
  hours?: number,
  categories?: string[],
  status?: Status
}

export type Status = {
  status: string,
  title: string
}

export type IconImage = {
  imgFile: string;
  text: string;
}

export const status: Status[] = [
  {
    status: "OPEN",
    title: "Pågående",
  },
  {
    status: "SOLD",
    title: "Avslutade"
  }
]