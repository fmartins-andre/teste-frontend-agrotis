import "./global.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { FormAgrotis } from "features/forms/form-agrotis";
import { themeAgrotis } from "resources/theme/theme-agrotis";
import { LayoutAgrotis } from "ui/layouts/layout-agrotis";

function App() {
  return (
    <ThemeProvider theme={themeAgrotis}>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <CssBaseline />
        <LayoutAgrotis>
          <FormAgrotis />
        </LayoutAgrotis>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
