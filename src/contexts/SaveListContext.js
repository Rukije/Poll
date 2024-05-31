
import React, { createContext, useState, useContext } from 'react';

const SavedListContext = createContext();

export const useSavedList = () => {
  return useContext(SavedListContext);
};

export const SavedListProvider = ({ children }) => {
  const [Savedlist, setSavedList] = useState([]);

  const addToSavedList = (item) => {
    setSavedList((prevSavedList) => [...prevSavedList, item]);
  };

  const removeFromSavedList = (item) => {
    setSavedList((prevSavedList) => prevSavedList.filter(savedItem => savedItem !== item));
  };

  return (
    <SavedListContext.Provider value={{ Savedlist, addToSavedList, removeFromSavedList }}>
      {children}
    </SavedListContext.Provider>
  );
};
