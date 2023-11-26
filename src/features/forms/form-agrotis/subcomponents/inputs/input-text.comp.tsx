import { Box, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import { FormAgrotisInputSchema } from "../../form-agrotis.schema";
import { CommonInputProps } from "./common-types";

export function InputText({ name, label, ...rest }: CommonInputProps) {
  const { control } = useFormContext<FormAgrotisInputSchema>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          variant="standard"
          fullWidth
          error={Boolean(error)}
          helperText={
            error?.message ??
            getCharCount(
              field.value.toString().length,
              rest?.inputProps?.["maxLength"],
            )
          }
          {...rest}
        />
      )}
    />
  );
}

function getCharCount(
  current: number | null | undefined = 0,
  max: number | null | undefined,
) {
  if (!max) return;

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      width="100%"
    >{`${current}/${max}`}</Box>
  );
}
