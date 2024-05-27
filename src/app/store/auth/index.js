import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    tokens: null,
  },
  reducers: {
    setCredentials: (state, { payload: { user, tokens } }) => {
      state.user = user;
      state.tokens = tokens;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.tokens = null;
    },
  },
  extraReducers: (builder) => {},
});

export const { setCredentials, clearCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
