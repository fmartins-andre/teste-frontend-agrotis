import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

const entitySchema = z.object({
  id: z.number(),
  nome: z.string(),
});

export const labSchema = entitySchema;
export const propertySchema = entitySchema.extend({ cnpj: z.string() });

export const contract = c.router({
  getLabs: {
    method: "GET",
    path: "/laboratorios.json",
    responses: {
      200: labSchema.array(),
    },
  },
  getProperties: {
    method: "GET",
    path: "/propriedades.json",
    responses: {
      200: propertySchema.array(),
    },
  },
});
