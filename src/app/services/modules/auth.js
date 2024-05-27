import { api } from "../api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Login
    login: builder.mutation({
      query: ({ phoneNumber, password }) => ({
        url: "/auth/login",
        method: "post",
        body: { phoneNumber, password },
      }),
    }),

    // Register
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "post",
        body: body,
      }),
    }),

    // Logout
    logout: builder.mutation({
      query: (token) => ({
        url: "/auth/logout",
        method: "post",
        body: {
          refreshToken: token,
        },
      }),
    }),

    // Forgot Password
    forgotPassword: builder.mutation({
      query: ({ phoneNumber }) => ({
        url: "/auth/forgot-password",
        method: "post",
        body: { phoneNumber },
      }),
    }),

    // Reset password
    resetPassword: builder.mutation({
      query: ({ verificationCode, newPassword, phoneNumber }) => ({
        url: "/auth/reset-password",
        method: "post",
        body: { verificationCode, newPassword, phoneNumber },
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
