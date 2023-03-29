import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ProductContext = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProductFromApi() {
      setLoading(true);
      const getRef = await fetch("https://dummyjson.com/products");
      const finalResult = await getRef.json();
      if (finalResult) {
        setLoading(false);
        setProducts(finalResult);
      }
    }
    getProductFromApi();
  }, []);

  return <Context.Provider value={{ products, loading }}>{children}</Context.Provider>;
};

export default ProductContext;
