import { startOfToday } from "date-fns";

import { FormAgrotisInputSchema } from "./form-agrotis.schema";

export const defaultValues: FormAgrotisInputSchema = {
  nome: "",
  dataInicial: startOfToday(),
  dataFinal: startOfToday(),
  infosPropriedade: {
    nome: "",
    id: 0,
  },
  cnpj: "",
  laboratorio: {
    nome: "",
    id: 0,
  },
  observacoes: "",
};
