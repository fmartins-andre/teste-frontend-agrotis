import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";

import { FormAgrotisInputSchema } from "../../form-agrotis.schema";
import { CommonInputProps } from "./common-types";

export function InputDate({ name, label, ...rest }: CommonInputProps) {
  const { control } = useFormContext<FormAgrotisInputSchema>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          {...field}
          label={label}
          slotProps={{
            textField: {
              variant: "standard",
              fullWidth: true,
              error: Boolean(error),
              helperText: error?.message,
              ...rest,
            },
          }}
        />
      )}
    />
  );
}
