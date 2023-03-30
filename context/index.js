import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const addFavourites = (productId, reason) => {
    let cpyFavourites = [...favourites];
    const index = cpyFavourites.findIndex((item) => item.id === productId);

    if (index === -1) {
      const getCurrentProduct = products.products.find(
        (product) => product.id === productId
      );
      cpyFavourites.push({
        id: productId,
        title: getCurrentProduct.title,
        reason: reason
      });
    }

    setFavourites(cpyFavourites);
  };

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

  return (
    <Context.Provider value={{ products, loading, addFavourites, favourites }}>
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
