export type TPokemon = {
  url: string;
  name: string;
};

export type TPokemonResponse = {
  count: number;
  next: string;
  previous: string;
  results: TPokemon[];
};

export type PokemonDetailed = {
  id: number;
  height: number;
  weight: number;
  name: string;
  order: number;
  stats: PokemonStat[];
  types: PokemonType[];
  sprites: { back_default: string; front_default: string };
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonByTypesResponse = {
  name: string;
  pokemon: [{ pokemon: TPokemon }];
};
