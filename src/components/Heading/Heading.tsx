// Test -------------------------- Importing the Packages ---------------------------------
import React, { useContext } from "react";

// Test -------------------------- Importing the styles / other components ----------------
import { Typography } from "@mui/material";
import WordContext from "../../context/word-context";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const Heading = () => {
  const { word } = useContext(WordContext);

  return (
    <Typography variant="h1" align="center" gutterBottom>
      {word ? word : "Word Hunt"}
    </Typography>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Heading;
