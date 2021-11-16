import { createContext, FC, useContext, useEffect, useState } from "react";
import { Category } from "../Interfaces/Interfaces";

type Props = {
  children?: JSX.Element;
};

const CategoryContext = createContext<any>(null);

export const useCategory = () => useContext(CategoryContext);

const CategoryContextProvider: FC<Props> = ({ children }: Props) => {
  console.log("---3. CATEGORY CONTEXT----");
  const [allCategories, setAllCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    if (allCategories.length <= 0) {
      getAllCategories();
    }
  }, []);

  const getAllCategories = async () => {
    let res: Response = await fetch("/rest/categories");
    let newCategories: Array<Category> = await res.json();
    setAllCategories(newCategories);
  };

  const values = {
    allCategories
  };

  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;