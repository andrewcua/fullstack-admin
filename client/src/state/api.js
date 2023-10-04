import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL}),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products", "Customers"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providersTags:["User"]
        }),
        getProducts: build.query({
            query: () => "client/products",
            providesTags: ["Products"],
        }),
        getCustomers: build.query({
            query:() => "client/customers",
            providesTag: ["Customers"],
        })
    })
})

// NOTES: useGetUserQuery - how it comes is from getUser, then a prefix of use and suffix of query;
// REDUX TOOLKIT SETUP 101

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery,
} = api;