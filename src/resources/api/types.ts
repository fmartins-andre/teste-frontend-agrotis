import { z } from "zod";

import { labSchema, propertySchema } from "./contract";

export type ILab = z.infer<typeof labSchema>;
export type IProperty = z.infer<typeof propertySchema>;
