import { FC } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";

import styles from "../../styles/main.module.css";
import { TPokemon } from "../../types";

type PokemonListProps = {
  pokemons: TPokemon[];
};

const PokemonList: FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <ul className={styles.pokemonsList}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
};

export default PokemonList;
