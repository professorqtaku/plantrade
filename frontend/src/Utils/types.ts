import { Category } from "../Interfaces/Interfaces"

export type SearchObject = {
  title: string,
  sort?: SortByTimes,
  categories?: Category[],
  status?: Status,
  page: number
}

export type Status = {
  status: string,
  title: string
}

export type IconImage = {
  imgFile: string;
  text: string;
}

export type SortByTimes = {
  sort: string,
  title: string;
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

export const sortByTimes: SortByTimes[] = [
  {
    sort: 'asc',
    title: "Kortast tid kvar",
  },
  {
    sort: 'desc',
    title: "Längst tid kvar"
  },
  {
    sort: 'none',
    title: "Ingen sortering"
  }
]