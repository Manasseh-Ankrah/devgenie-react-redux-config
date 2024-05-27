import { api } from "../api";

export const meApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get logged in user data (for profile)
    getMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "get",
      }),
      providesTags: ["Me"],
    }),

    // Update me
    updateMe: builder.mutation({
      query: (body) => ({
        url: "/users/me",
        method: "put",
        body,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      invalidatesTags: ["Me"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetMeQuery, useUpdateMeMutation } = meApi;
