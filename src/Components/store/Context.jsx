import { createContext, useContext, useState } from "react";

const categoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <categoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </categoryContext.Provider>
  );
};

export const UseCategory = () => useContext(categoryContext);
