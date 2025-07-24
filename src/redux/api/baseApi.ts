import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: "https://library-management-api-topaz.vercel.app/api",
        baseUrl: "http://localhost:5000/api",
    }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (genre) => {
                return genre ? `/books?filter=${genre}` : "/books";
            }
        })
    })
});


export const { useGetBooksQuery } = baseApi;