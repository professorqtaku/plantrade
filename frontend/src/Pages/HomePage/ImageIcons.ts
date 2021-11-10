
import Leaf from "./kategory_Images/BlackLeaf.png";
import Flower from "./kategory_Images/BlackFlower.png";
import Tree from "./kategory_Images/BlackTree.png";
import Bush from "./kategory_Images/BlackBush.png";
import Seed from "./kategory_Images/BlackSeed.png";
import { IconImage } from "../../Utils/types";

export const imageIcons: Record<string, IconImage> = {
  träd: {
    imgFile: Tree,
    text: "TRÄD",
  },
  frö: {
    imgFile: Seed,
    text: "FRÖ",
  },
  buske: {
    imgFile: Bush,
    text: "BUSKE",
  },
  stickling: {
    imgFile: Leaf,
    text: "STICKLING",
  },
  blomma: {
    imgFile: Flower,
    text: "BLOMMA",
  },
};