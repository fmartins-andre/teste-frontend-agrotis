import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { apiClient } from "resources/api";
import { FancyContainer } from "ui/components/fancy-container";
import { getParsedObj } from "utils/get-parsed-obj";

import { defaultValues } from "./default-values";
import {
  FormAgrotisInputSchema,
  formAgrotisSchema,
} from "./form-agrotis.schema";
import { useSubmitForm } from "./helpers/use-submit-form.hook";
import { useUpdateCnpj } from "./helpers/use-update-cnpj.hook";
import {
  InputAutocomplete,
  InputDate,
  InputText,
} from "./subcomponents/inputs";

export function FormAgrotis() {
  const formMethods = useForm<FormAgrotisInputSchema>({
    resolver: zodResolver(formAgrotisSchema),
    defaultValues,
  });

  const cnpjWatch = formMethods.watch("cnpj");

  useUpdateCnpj(formMethods.watch, formMethods.setValue);

  const handleSubmit = useSubmitForm(formMethods.handleSubmit);

  const { data: labs } = apiClient.getLabs.useQuery(["labs"]);

  const { data: properties } = apiClient.getProperties.useQuery(["properties"]);

  return (
    <FormProvider {...formMethods}>
      <FancyContainer.Root>
        <FancyContainer.Header style={{ justifyContent: "space-between" }}>
          Teste front-end
          <Button
            variant="contained"
            color="primary"
            sx={{ boxShadow: "none" }}
            onClick={handleSubmit}
          >
            Salvar
          </Button>
        </FancyContainer.Header>

        <FancyContainer.Body>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputText
                name="nome"
                label="Nome *"
                inputProps={{ maxLength: 40 }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <InputDate name="dataInicial" label="Data Inicial *" />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <InputDate name="dataFinal" label="Data Final *" />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputAutocomplete
                name="infosPropriedade"
                label="Propriedades *"
                disableClearable
                getOptionLabel={(option) => option.nome ?? ""}
                options={getParsedObj(properties?.body) ?? []}
                renderedInputProps={{
                  helperText: cnpjWatch ? `CNPJ: ${cnpjWatch}` : undefined,
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputAutocomplete
                name="laboratorio"
                label="Laboratório *"
                disableClearable
                getOptionLabel={(option) => option.nome ?? ""}
                options={getParsedObj(labs?.body) ?? []}
              />
            </Grid>

            <Grid item xs={12}>
              <InputText
                name="observacoes"
                label="Observações"
                multiline
                minRows={5}
                inputProps={{ maxLength: 1000 }}
              />
            </Grid>
          </Grid>
        </FancyContainer.Body>
      </FancyContainer.Root>
    </FormProvider>
  );
}
