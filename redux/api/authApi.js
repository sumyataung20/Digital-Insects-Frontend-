import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({ baseUrl: `https://dgic.axletechmm.com/api` }),
  // baseQuery: fetchBaseQuery({ baseUrl: `http://192.168.1.249:8000/api` }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),

    login: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),

    fetchUser: builder.query({
      query: () => "/user/",
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
