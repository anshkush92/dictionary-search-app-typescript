// Test -------------------------- Importing the Packages ---------------------------------

// Test -------------------------- Importing the styles / other components ----------------
import { Autocomplete, TextField } from "@mui/material";

// Test -------------------------- Structure of Props ----------------------------------
import { LangSearch } from "../../../models/language-search.type";
import { languages } from "../../../models/languages";

// Test -------------------------- The current component ----------------------------------
const Language = (props: LangSearch) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={languages}
      sx={{ width: 250 }}
      renderInput={(params) => (
        <TextField {...params} label="Languages"></TextField>
      )}
    ></Autocomplete>
  );
};

// Test -------------------------- Exporting the current component ------------------------
export default Language;
