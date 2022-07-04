import React from "react";
import { Container } from "@mui/system";

// Styles
import "./App.css";

// Components
import Heading from "./components/Heading/Heading";
import LanguageSearchCombined from "./components/Langauage + Search/LanguageSearchCombined";

const App = () => {
  return (
    <div className="app">
      <Container maxWidth="md" className="container">
        <Heading></Heading>
        <LanguageSearchCombined></LanguageSearchCombined>
      </Container>
    </div>
  );
};

export default App;
