import { initQueryClient } from "@ts-rest/react-query";

import { contract } from "./contract";

const baseUrl =
  "https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/";

export const apiClient = initQueryClient(contract, {
  baseUrl,
  baseHeaders: {},
});
