import { createContext, FC, useContext, useState } from "react";

type Props = {
  children?: JSX.Element;
};

type Category = {
  id: Number;
  name: String;
}

const CategoryContext = createContext<any>(null);

export const useCategory = () => useContext(CategoryContext);

const CategoryProvider: FC<Props> = ({ children }: Props) => {
  const [allCategories, setAllCategories] = useState<Array<Category>>([]);

  const getAllCategories = async () => {
    let res: Response = await fetch('/rest/categories');
    let newCategories: Array<Category> = await res.json();
    setAllCategories(newCategories);
    return newCategories;
  }
  
  const values = {
    allCategories,
    getAllCategories
  }

  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryProvider;