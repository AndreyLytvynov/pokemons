import { FC } from "react";
import PokemonTypeBtn from "../shared/buttons/PokemonTypeBtn/PokemonTypeBtn";

import { PokemonType } from "../../types";
import styles from "./pokemonTypesList.module.css";

type PokemonTypesListProps = {
  types: PokemonType[] | undefined;
};

const PokemonTypesList: FC<PokemonTypesListProps> = ({ types }) => {
  return (
    <ul className={styles.pokemonTypesList}>
      {types?.map(({ type }) => (
        <PokemonTypeBtn key={type.url} typeName={type.name}>
          {type.name}
        </PokemonTypeBtn>
      ))}
    </ul>
  );
};

export default PokemonTypesList;
