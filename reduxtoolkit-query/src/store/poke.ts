import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemon",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;

<section>
  <h1>RTK Query</h1>
  {error ? (
    <>앗, 오류가 발생했습니다.</>
  ) : isLoading ? (
    <>로딩중...</>
  ) : data ? (
    <>
      <h3>{data.species.name}</h3>
      <img src={data.sprites.front_shiny} alt={data.species.name} />
    </>
  ) : null}
</section>;
