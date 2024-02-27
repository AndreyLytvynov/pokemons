import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { useGetPokemonTypesQuery } from "../../services/pokemonService";

import styles from "./selectedPokemonType.module.css";

const SelectedPokemonType: FC = () => {
  const navigate = useNavigate();

  const { data: pokemonTypes } = useGetPokemonTypesQuery("");

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    if (e.target.value === "all") {
      navigate(`/`);
    } else {
      navigate(`/types/${e.target.value}`);
    }
  };

  return (
    <select className={styles.select} onChange={handleSelectChange}>
      <option value='all'>all</option>
      {pokemonTypes?.results.map((pokemonType) => (
        <option key={pokemonType.url} value={pokemonType.name}>
          {pokemonType.name}
        </option>
      ))}
    </select>
  );
};

export default SelectedPokemonType;
