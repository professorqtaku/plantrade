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
  const [categories, setCategories] = useState<Array<Category>>([]);

  const getAllCategories = async () => {
    let res: Response = await fetch('/rest/categories');
    let allCategories: Array<Category> = await res.json();
    setCategories(allCategories);
    return allCategories;
  }
  
  const values = {
    categories,
    getAllCategories
  }

  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryProvider;