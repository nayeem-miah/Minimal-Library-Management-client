import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://library-management-api-topaz.vercel.app/api",
        // baseUrl: "http://localhost:5000/api",
    }),
    tagTypes: ["Books", "Borrow", "Reviews"],
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
        getSingleBook: builder.query({
            query: (id) => `/books/${id}`
        }),
        // update book
        updateBook: builder.mutation({
            query: ({ id, formData }) => {
                // console.log(formData, id);
                return {
                    url: `/books/${id}`,
                    method: "PATCH",
                    body: formData
                };
            },
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
        }),
        // use review /reviews
        addReview: builder.mutation({
            query: (newReview) => ({
                url: "/reviews",
                method: "POST",
                body: newReview
            }),
            invalidatesTags: ["Reviews"]

        }),
        getReviews: builder.query({
            query: () => "/reviews",
            providesTags: ["Reviews"]
        })
    })
});


export const {
    useGetBooksQuery,
    useAddBookMutation,
    useDeleteBookMutation,
    useBorrowBookMutation,
    useGetBorrowSummaryQuery,
    useGetRecentBookQuery,
    useUpdateBookMutation,
    useGetSingleBookQuery,
    useAddReviewMutation,
    useGetReviewsQuery
} = baseApi;