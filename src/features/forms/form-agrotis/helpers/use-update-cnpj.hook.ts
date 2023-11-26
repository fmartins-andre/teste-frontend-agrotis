import { useEffect } from "react";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { apiClient } from "resources/api";
import { getParsedObj } from "utils/get-parsed-obj";

import { FormAgrotisInputSchema } from "../form-agrotis.schema";

export function useUpdateCnpj(
  watch: UseFormWatch<FormAgrotisInputSchema>,
  setValue: UseFormSetValue<FormAgrotisInputSchema>,
) {
  const infosPropriedadeWatch = watch("infosPropriedade");

  const { data } = apiClient.getProperties.useQuery(["properties"]);

  const selectedPropertyCnpj = getParsedObj(data?.body)?.find(
    (property) => property.id === infosPropriedadeWatch.id,
  )?.cnpj;

  useEffect(() => {
    if (selectedPropertyCnpj) setValue("cnpj", selectedPropertyCnpj);
  }, [selectedPropertyCnpj, setValue]);
}
