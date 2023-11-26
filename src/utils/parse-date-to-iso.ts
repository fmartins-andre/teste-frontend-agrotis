import { format } from "date-fns";

export function parseDateToIso(date: Date) {
  return format(date, "yyyy-MM-dd'T'HH:mm:ss'Z'");
}
