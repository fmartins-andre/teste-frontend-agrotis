import { TextFieldProps, UseAutocompleteProps } from "@mui/material";

import { FormAgrotisInputSchema } from "../../form-agrotis.schema";

export type CommonInputProps = TextFieldProps & {
  name: keyof FormAgrotisInputSchema;
  label: string;
};

export type CommonAutocompleteOption = {
  id: number;
  nome: string;
  [key: string]: unknown;
};

export type CommonAutocompleteProps = UseAutocompleteProps<
  CommonAutocompleteOption,
  false,
  true,
  false
> & {
  name: keyof Pick<FormAgrotisInputSchema, "infosPropriedade" | "laboratorio">;
  label: string;
  renderedInputProps?: TextFieldProps;
};
