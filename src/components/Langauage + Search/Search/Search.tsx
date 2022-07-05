// Test -------------------------- Importing the Packages ---------------------------------
import { useEffect, useContext } from "react";
import { TextField } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
// Styles
import "../LSC.css";

// Compnents
import WordContext from "../../../context/word-context";
import { DictionaryApi } from "../../../utilities/DictionaryApi";

// Test -------------------------- Structure of Props ----------------------------------
import { SearchProps } from "../../../models/language-search.type";

// Test -------------------------- The current component ----------------------------------
const Search = ({ language, getData }: SearchProps) => {
  const { word, setWord } = useContext(WordContext);

  const enteredWord = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setWord(event.target.value);
  };

  useEffect(() => {
    const request = async () => {
      console.log(word, language);
      if (word) {
        const data = await DictionaryApi(word, language);
        getData(data);
      }
    };

    // Sending request for every search which we don't want :(
    // We should create a debounce function to tackle this
    request();
  }, [word, language, getData]);

  return (
    <TextField
      className="width-language-select"
      variant="standard"
      label="Search A Word"
      value={word}
      onChange={enteredWord}
    ></TextField>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Search;
