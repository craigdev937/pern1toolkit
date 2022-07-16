import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPlayer } from "../models/Interfaces";

const URL = "https://pern1toolkit-deploy.herokuapp.com/api";
export const PlayerAPI = createApi({
    reducerPath: "PlayerAPI",
    tagTypes: ["Player"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        fetchAll: builder.query<IPlayer[], void>({
            query: () => "/players",
            providesTags: ["Player"],
        }),
        getOne: builder.query<IPlayer, string>({
            query: (id) => `/players/${id}`,
            providesTags: ["Player"],
        }),
        add: builder.mutation<IPlayer, IPlayer>({
            query: (payload) => ({
                url: "/players",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["Player"]
        }),
        update: builder.mutation<IPlayer, IPlayer>({
            query: ({id, ...payload}) => ({
                url: `/players/${id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["Player"]
        }),
        delete: builder.mutation<IPlayer, string>({
            query: (id) => ({
                url: `players/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Player"]
        })
    }),
});


