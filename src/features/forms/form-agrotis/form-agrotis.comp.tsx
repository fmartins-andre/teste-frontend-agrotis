import { Button, Grid, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { FancyContainer } from "ui/layouts/layout-agrotis/components/fancy-container";

export function FormAgrotis() {
  return (
    <FancyContainer.Root>
      <FancyContainer.Header style={{ justifyContent: "space-between" }}>
        Teste front-end
        <Button variant="contained" color="primary" sx={{ boxShadow: "none" }}>
          Salvar
        </Button>
      </FancyContainer.Header>
      <FancyContainer.Body>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField label="Nome *" variant="standard" fullWidth />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <DatePicker
              label="Data Inicial * "
              slotProps={{
                textField: { variant: "standard", fullWidth: true },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <DatePicker
              label="Data Final * "
              slotProps={{
                textField: { variant: "standard", fullWidth: true },
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField label="Propriedade *" variant="standard" fullWidth />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField label="Laboratório *" variant="standard" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Observações"
              variant="standard"
              multiline
              minRows={5}
              fullWidth
            />
          </Grid>
        </Grid>
      </FancyContainer.Body>
    </FancyContainer.Root>
  );
}
