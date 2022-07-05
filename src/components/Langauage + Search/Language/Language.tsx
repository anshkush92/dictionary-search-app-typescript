// Test -------------------------- Importing the Packages ---------------------------------
import { useState, useContext } from "react";
import { Autocomplete, TextField } from "@mui/material";

// Test -------------------------- Importing the styles / other components ----------------
// Styles
import "../LSC.css";

// Components
import WordContext from "../../../context/word-context";
// Test -------------------------- Structure of Props ----------------------------------
import { languages } from "../../../models/languages";
import {
  languagesType,
  LanguageProps,
} from "../../../models/language-search.type";

// Test -------------------------- The current component ----------------------------------
const Language = (props: LanguageProps) => {
  const { setWord } = useContext(WordContext);
  const [language, setLanguage] = useState<languagesType>(languages[0]);

  const onChangeHandler = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: languagesType | null
  ) => {
    newValue = newValue || languages[0];
    setLanguage(newValue);
    setWord("");

    props.getLanguage(newValue.value || language.value);
    console.log(language);
  };

  return (
    <Autocomplete
      className="width-language-select"
      disablePortal
      id="combo-box-demo"
      options={languages}
      renderInput={(params) => (
        <TextField {...params} label="Languages"></TextField>
      )}
      value={language}
      onChange={onChangeHandler}
    ></Autocomplete>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Language;
