import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY = "738506e5-57d9-4c19-854b-4c8f0ac5c600";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchBreed: builder.query<Breed[], number | void>({
      query: (limit = 10) => `/breeds?limit=${limit}`,
    }),
  }),
});

export const { useFetchBreedQuery } = apiSlice;
