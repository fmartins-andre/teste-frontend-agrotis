export function getParsedObj<T>(data: T): T | undefined {
  if (!data) return;

  try {
    if (Object.prototype.toString.call(data).endsWith("Object]"))
      return data as T;
    if (typeof data === "string") return JSON.parse(data);

    throw new Error();
  } catch (error) {
    return;
  }
}
