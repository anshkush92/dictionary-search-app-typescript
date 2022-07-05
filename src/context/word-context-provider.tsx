// Test -------------------------- Importing the Packages ---------------------------------
import { useState } from "react";

// Test -------------------------- Importing the styles / other components ----------------
import WordContext from "./word-context";

// Test -------------------------- Structure of Props ----------------------------------
import { wordContextProviderProps } from "../models/word-context-provider.type";

// Test -------------------------- The current component ----------------------------------
const WordContextProvider = (props: wordContextProviderProps) => {
  const [word, setWord] = useState<string>("");

  return (
    <WordContext.Provider value={{ word, setWord }}>
      {props.children}
    </WordContext.Provider>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default WordContextProvider;
