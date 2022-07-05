// Test -------------------------- Importing the Packages ---------------------------------
import React, { useContext } from "react";

// Test -------------------------- Importing the styles / other components ----------------
import "./Output.css";
import WordContext from "../../../context/word-context";

// Test -------------------------- Structure of Props ----------------------------------
import { OutputProps } from "../../../models/language-search.type";

// Test -------------------------- The current component ----------------------------------
const Output = ({ data }: OutputProps) => {
  const { word } = useContext(WordContext);

  let meanings: (JSX.Element[][] | undefined)[] = [];

  if (data) {
    meanings = data.map((item) =>
      item.meanings?.map((item1) =>
        item1.definitions.map((item2, index) => (
          <div className="output-container" key={index}>
            {item2.definition}
          </div>
        ))
      )
    );
    console.log(data);
  }

  return (
    <div className="output">
      {data !== null ? meanings : word ? "Meaning not found" : "Type a word"}
    </div>
  );
};
// Test -------------------------- Exporting the current component ------------------------
export default Output;
