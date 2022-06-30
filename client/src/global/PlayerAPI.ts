import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPlayer } from "../models/Interfaces";

const URL = "http://localhost:9000/api";
export const PlayerAPI = createApi({
    reducerPath: "PlayerAPI",
    tagTypes: ["Player"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        fetchAll: builder.query<IPlayer[], void>({
            query: () => "/players",
            providesTags: ["Player"],
        }),
    }),
});


