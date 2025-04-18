"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [redditPostUrl, setRedditPostUrl] = useState("");
  const [selectedGame, setSelectedGame] = useState("subway");
  const [selectedFont, setSelectedFont] = useState("Poppins-Bold");
  const [selectedFontColor, setSelectedFontColor] = useState("white");
  const [username, setUsername] = useState("");
  const [voice, setVoice] = useState("voice1");
  const [isGenerating, setIsGenerating] = useState(false);

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
        isGenerating,
        setIsGenerating,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
