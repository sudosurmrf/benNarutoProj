import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL ='https://narutodb.xyz/api/'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL}),
  tagTypes: ['Characters'],
  endpoints: () => ({}),
  })


export default api;