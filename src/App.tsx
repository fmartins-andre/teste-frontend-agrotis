import "./global.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormAgrotis } from "features/forms/form-agrotis";
import { themeAgrotis } from "resources/theme/theme-agrotis";
import { LayoutAgrotis } from "ui/layouts/layout-agrotis";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={themeAgrotis}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <LayoutAgrotis>
            <FormAgrotis />
          </LayoutAgrotis>
        </QueryClientProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
