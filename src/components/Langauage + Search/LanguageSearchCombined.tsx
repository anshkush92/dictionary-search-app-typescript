// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";

// Test -------------------------- Importing the styles / other components ----------------
// Styles
import "./LSC.css";

// Components
import Language from "./Language/Language";
import Search from "./Search/Search";
// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------

const LanguageSearchCombined = () => {
  return (
    <div className="language-search-container">
      <Search></Search>
      <Language></Language>
    </div>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default LanguageSearchCombined;
