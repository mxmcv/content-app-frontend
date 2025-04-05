"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [redditPostUrl, setRedditPostUrl] = useState("");

  return (
    <AppContext.Provider value={{ redditPostUrl, setRedditPostUrl }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
