// Test -------------------------- Importing the Packages ---------------------------------
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
import { DictionaryApi } from "../../../utilities/DictionaryApi";

// Test -------------------------- Structure of Props ----------------------------------
import { LangSearch } from "../../../models/language-search.type";

// Test -------------------------- The current component ----------------------------------
const Search = (props: LangSearch) => {
  const [word, setWord] = useState<React.ReactNode>(null);

  const enteredWord = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(event.target.value);
    setWord(event.target.value);
  };

  useEffect(() => {
    const request = async () => {
      if (word) await DictionaryApi(word);
    };

    // Sending request for every search which we don't want :(
    // We should create a debounce function to tackle this
    request();

    return () => {
      console.log("Cleanup function search.tsx");
    };
  }, [word]);

  return (
    <TextField
      variant="standard"
      label="Search A Word"
      onChange={enteredWord}
    ></TextField>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Search;
