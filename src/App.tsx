import "./global.css";

import { FormAgrotis } from "features/forms/form-agrotis";
import { DefaultProvider } from "resources/providers/default-provider";
import { LayoutAgrotis } from "ui/layouts/layout-agrotis";

function App() {
  return (
    <DefaultProvider>
      <LayoutAgrotis>
        <FormAgrotis />
      </LayoutAgrotis>
    </DefaultProvider>
  );
}

export default App;
