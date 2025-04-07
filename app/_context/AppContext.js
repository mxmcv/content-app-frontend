"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [redditPostUrl, setRedditPostUrl] = useState("");
  const [selectedGame, setSelectedGame] = useState("subway-surfers");
  const [selectedFont, setSelectedFont] = useState("Poppins-Bold");
  const [selectedFontColor, setSelectedFontColor] = useState("white");
  const [username, setUsername] = useState("username");
  const [voice, setVoice] = useState("voice1");

  return (
    <AppContext.Provider
      value={{
        redditPostUrl,
        setRedditPostUrl,
        selectedGame,
        setSelectedGame,
        selectedFont,
        setSelectedFont,
        selectedFontColor,
        setSelectedFontColor,
        username,
        setUsername,
        voice,
        setVoice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
