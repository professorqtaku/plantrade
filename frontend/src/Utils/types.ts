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