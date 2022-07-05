// Test -------------------------- Importing the Packages ---------------------------------
import React from "react";

// Test -------------------------- Importing the styles / other components ----------------
import { wordContext } from '../models/word-context-provider.type';

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const WordContext = React.createContext({} as wordContext);

// Test -------------------------- Exporting the current component ------------------------
export default WordContext;
