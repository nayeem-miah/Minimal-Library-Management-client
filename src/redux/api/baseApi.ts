import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: "https://library-management-api-topaz.vercel.app/api",
        baseUrl: "http://localhost:5000/api",
    }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (genre) => {
                return genre ? `/books?filter=${genre}` : "/books";
            },
            providesTags: ["Books"]
        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: '/books',
                method: "POST",
                body: newBook
            })
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Books"]
        })
    })
});


export const { useGetBooksQuery, useAddBookMutation, useDeleteBookMutation } = baseApi;