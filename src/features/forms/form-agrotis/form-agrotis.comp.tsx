import { zodResolver } from "@hookform/resolvers/zod";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { apiClient, IProperty } from "resources/api";
import { FancyContainer } from "ui/components/fancy-container";
import { getParsedObj } from "utils/get-parsed-obj";

import { defaultValues } from "./default-values";
import {
  FormAgrotisInputSchema,
  formAgrotisSchema,
} from "./form-agrotis.schema";

export function FormAgrotis() {
  const formMethods = useForm<FormAgrotisInputSchema>({
    resolver: zodResolver(formAgrotisSchema),
    defaultValues,
  });

  const handleSubmit = formMethods.handleSubmit(
    (data) => console.log("onValid: ", data),
    (error) => console.log("onInvalid: ", error),
  );

  const { data: labs, isFetching: isFetchingLabs } = apiClient.getLabs.useQuery(
    ["labs"],
  );

  const { data: properties, isFetching: isFetchingProperties } =
    apiClient.getProperties.useQuery(["properties"]);

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
              <Controller
                control={formMethods.control}
                name="nome"
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Nome *"
                    variant="standard"
                    fullWidth
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Controller
                control={formMethods.control}
                name="dataInicial"
                render={({ field, fieldState: { error } }) => (
                  <DatePicker
                    {...field}
                    label="Data Inicial * "
                    slotProps={{
                      textField: {
                        variant: "standard",
                        fullWidth: true,
                        error: Boolean(error),
                        helperText: error?.message,
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Controller
                control={formMethods.control}
                name="dataFinal"
                render={({ field, fieldState: { error } }) => (
                  <DatePicker
                    {...field}
                    label="Data Final * "
                    slotProps={{
                      textField: {
                        variant: "standard",
                        fullWidth: true,
                        error: Boolean(error),
                        helperText: error?.message,
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                control={formMethods.control}
                name="infosPropriedade"
                render={({ field, fieldState: { error } }) => (
                  <Autocomplete
                    {...field}
                    disableClearable
                    value={field.value}
                    loading={isFetchingProperties}
                    getOptionLabel={(option) => option.nome ?? ""}
                    options={getParsedObj(properties?.body) ?? []}
                    onChange={(_, value) => {
                      if (value) {
                        formMethods.setValue(
                          "cnpj",
                          (value as unknown as IProperty).cnpj,
                        );
                      }
                      field.onChange(value);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Propriedades *"
                        variant="standard"
                        fullWidth
                        error={Boolean(error)}
                        helperText={error?.message}
                      />
                    )}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                control={formMethods.control}
                name="laboratorio"
                render={({ field, fieldState: { error } }) => (
                  <Autocomplete
                    {...field}
                    disableClearable
                    value={field.value}
                    loading={isFetchingLabs}
                    getOptionLabel={(option) => option.nome ?? ""}
                    options={getParsedObj(labs?.body) ?? []}
                    onChange={(_, value) => {
                      field.onChange(value);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Laboratório *"
                        variant="standard"
                        fullWidth
                        error={Boolean(error)}
                        helperText={error?.message}
                      />
                    )}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                control={formMethods.control}
                name="observacoes"
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Observações"
                    variant="standard"
                    multiline
                    minRows={5}
                    fullWidth
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
        </FancyContainer.Body>
      </FancyContainer.Root>
    </FormProvider>
  );
}
