import { api } from "../api";

/// Miscelaneous API
export const miscApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => ({
        url: "/cities",
        method: "get",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCitiesQuery } = miscApi;
