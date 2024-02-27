import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  PokemonByTypesResponse,
  PokemonDetailed,
  TPokemonResponse,
} from "../types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query<
      TPokemonResponse,
      { limit: number; offset: number }
    >({
      query: ({ limit, offset }) => ({
        url: `pokemon/`,
        params: { limit, offset },
      }),
    }),
    getPokemonByName: builder.query<PokemonDetailed, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonTypes: builder.query<TPokemonResponse, string>({
      query: () => `type/`,
    }),
    getPokemonsByType: builder.query<PokemonByTypesResponse, string>({
      query: (type) => `type/${type}`,
    }),
  }),
});

export const {
  useGetAllPokemonQuery,
  useGetPokemonByNameQuery,
  useGetPokemonTypesQuery,
  useGetPokemonsByTypeQuery,
} = pokemonApi;
