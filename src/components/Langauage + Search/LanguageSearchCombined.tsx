// Test -------------------------- Importing the Packages ---------------------------------
import React, { Fragment, useCallback, useState } from "react";

// Test -------------------------- Importing the styles / other components ----------------
// Styles
import "./LSC.css";

// Components
import Language from "./Language/Language";
import Search from "./Search/Search";
import Output from "./Output/Output";
import { Api } from "../../models/api.type";
// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const LanguageSearchCombined = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [outputData, setOutputData] = useState<Api[] | null>(null);

  const getLanguage = (language: string) => {
    setCurrentLanguage(language);
    console.log(language);
  };

  const getOutputData = useCallback((data: Api[] | null) => {
    setOutputData(data);
  }, []);

  return (
    <Fragment>
      <div className="language-search-container">
        <Search language={currentLanguage} getData={getOutputData}></Search>
        <Language getLanguage={getLanguage}></Language>
      </div>

      <div className="output-container">
        <Output data={outputData}></Output>
      </div>
    </Fragment>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default LanguageSearchCombined;
