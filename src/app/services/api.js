import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Config } from "app/config";

/* Creating a base query that will be used to make requests. 
 * You can use the AxiosBaseQuery we used in the last project,

*/

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
});
