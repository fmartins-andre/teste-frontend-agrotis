import { parseISO, startOfDay, startOfToday } from "date-fns";
import { parseDateToIso } from "utils/parse-date-to-iso";
import { z } from "zod";

const entitySchema = z
  .object({
    id: z.number(),
    nome: z.string(),
  })
  .refine((value) => value?.id, "Campo obrigatório");

export const formAgrotisSchema = z
  .object({
    nome: z.string().min(5).max(40).trim(),
    dataInicial: z
      .date()
      .min(startOfToday(), "Data não pode ser retroativa")
      .transform((date) => parseDateToIso(date)),
    dataFinal: z
      .date()
      .min(startOfToday(), "Data não pode ser retroativa")
      .transform((date) => parseDateToIso(date)),
    infosPropriedade: entitySchema,
    cnpj: z.string(),
    laboratorio: entitySchema,
    observacoes: z.string().max(1000).trim(),
  })
  .superRefine((args, ctx) => {
    const dataFinal = startOfDay(parseISO(args.dataFinal));
    const dataInicial = startOfDay(parseISO(args.dataInicial));

    if (dataFinal < dataInicial) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        message: "Data não deve ser inferior à Data Inicial",
        path: ["dataFinal"],
      });
    }
  });

export type FormAgrotisInputSchema = z.input<typeof formAgrotisSchema>;
export type FormAgrotisOutputSchema = z.infer<typeof formAgrotisSchema>;
