import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: "https://library-management-api-topaz.vercel.app/api",
        baseUrl: "http://localhost:5000/api",
    }),
    tagTypes: ["Books", "Borrow"],
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
        }),

        // borrow books
        borrowBook: builder.mutation({
            query: (newData) => ({
                url: "/borrow",
                method: "POST",
                body: newData
            }),
            invalidatesTags: ["Books"]
        }),
        getBorrowSummary: builder.query({
            query: () => "/borrow",
            providesTags: ["Borrow"]
        }),

        // optional books-recent
        getRecentBook: builder.query({
            query: () => "/recent-books",
            providesTags: ["Books"]
        })



    })
});


export const {
    useGetBooksQuery,
    useAddBookMutation,
    useDeleteBookMutation,
    useBorrowBookMutation,
    useGetBorrowSummaryQuery,
    useGetRecentBookQuery
} = baseApi;