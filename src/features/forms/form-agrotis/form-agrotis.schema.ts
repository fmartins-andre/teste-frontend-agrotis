import { parseDateToIso } from "utils/parse-date-to-iso";
import { z } from "zod";

const entitySchema = z
  .object({
    id: z.number(),
    nome: z.string(),
  })
  .refine((value) => value?.id, "Campo obrigatório");

export const formAgrotisSchema = z.object({
  nome: z.string().min(5).max(60),
  dataInicial: z.date().transform((date) => parseDateToIso(date)),
  dataFinal: z.date().transform((date) => parseDateToIso(date)),
  infosPropriedade: entitySchema,
  cnpj: z.string(),
  laboratorio: entitySchema,
  observacoes: z.string(),
});

export type FormAgrotisInputSchema = z.input<typeof formAgrotisSchema>;
export type FormAgrotisOutputSchema = z.infer<typeof formAgrotisSchema>;
