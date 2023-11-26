import { Autocomplete, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import { FormAgrotisInputSchema } from "../../form-agrotis.schema";
import { CommonAutocompleteProps } from "./common-types";

export function InputAutocomplete({
  name,
  label,
  renderedInputProps,
  ...rest
}: CommonAutocompleteProps) {
  const { control } = useFormContext<FormAgrotisInputSchema>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          {...rest}
          onChange={(_, value) => {
            field.onChange(value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="standard"
              fullWidth
              error={Boolean(error)}
              helperText={error?.message}
              {...renderedInputProps}
            />
          )}
        />
      )}
    />
  );
}
