import { FC } from "react";
import PokemonTypeBtn from "../shared/buttons/PokemonTypeBtn/PokemonTypeBtn";

import { PokemonDetailed } from "../../types";
import styles from "./pokemonStatsTable.module.css";

type PokemonStatsTable = {
  pokemon: PokemonDetailed;
};

const PokemonStatsTable: FC<PokemonStatsTable> = ({ pokemon }) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td>Type</td>
          <td className={styles.types}>
            {pokemon.types.map(({ type }) => (
              <PokemonTypeBtn key={type.name} typeName={type.name}>
                {type.name}
              </PokemonTypeBtn>
            ))}
          </td>
        </tr>

        {pokemon.stats.map(({ stat, base_stat }) => {
          return (
            <tr key={stat.url}>
              <td>{stat.name}</td>
              <td>{base_stat}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PokemonStatsTable;
