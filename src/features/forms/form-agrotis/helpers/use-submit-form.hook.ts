import {
  SubmitErrorHandler,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";

import { FormAgrotisInputSchema } from "../form-agrotis.schema";

export function useSubmitForm(
  handleSubmit: UseFormHandleSubmit<FormAgrotisInputSchema>,
) {
  const onValid: SubmitHandler<FormAgrotisInputSchema> = (data) => {
    console.log("Submitted data from form: ", data);
  };

  const onInvalid: SubmitErrorHandler<FormAgrotisInputSchema> = (error) => {
    console.log("Errors from form: ", error);
  };

  return handleSubmit(onValid, onInvalid);
}
