import React, { createContext, useState, useContext } from 'react';

const WishListContext = createContext();

export const useWishList = () => {
  return useContext(WishListContext);
};

export const WishListProvider = ({ children }) => {
  const [wishlist, setWishList] = useState([]);

  const addToWishList = (item) => {
    setWishList((prevWishList) => [...prevWishList, item]);
  };

  return (
    <WishListContext.Provider value={{ wishlist, addToWishList }}>
      {children}
    </WishListContext.Provider>
  );
};
