import "./global.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FormAgrotis } from "features/forms/form-agrotis";
import i18next from "i18next";
import { themeAgrotis } from "resources/theme/theme-agrotis";
import { LayoutAgrotis } from "ui/layouts/layout-agrotis";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/pt/zod.json";

const queryClient = new QueryClient();

i18next.init({
  lng: "pt",
  resources: {
    pt: { zod: translation },
  },
});
z.setErrorMap(zodI18nMap);

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
