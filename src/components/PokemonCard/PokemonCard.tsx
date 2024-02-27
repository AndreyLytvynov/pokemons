import { FC, useState } from "react";

import { useGetPokemonByNameQuery } from "../../services/pokemonService";

import PokemonTypesList from "../PokemonTypesList/PokemonTypesList";
import PokemonModal from "../PokemonModal/PokemonModal";
import Loader from "../shared/Loader/Loader";

import styles from "./pokemonCard.module.css";
import { TPokemon } from "../../types";

type PokemonCardProps = {
  pokemon: TPokemon;
};

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const [openModal, setOpenModal] = useState(false);
  const { data: pokemonDetailed, isLoading } = useGetPokemonByNameQuery(
    pokemon.name
  );

  const handleClickPokemonModal = () => {
    setOpenModal(!openModal);
  };

  if (isLoading || !pokemonDetailed) {
    return (
      <div className={styles.pokemonCard}>
        <Loader />
      </div>
    );
  }

  return (
    <li className={styles.pokemonCard} onClick={handleClickPokemonModal}>
      <img
        src={
          pokemonDetailed.sprites.back_default ||
          pokemonDetailed.sprites.front_default ||
          "https://res.cloudinary.com/dn5s7eije/image/upload/v1708622607/custom_folder/1708624937481.jpg"
        }
        alt='pokemon'
        width={100}
        height={100}
        loading='lazy'
      />
      <p>{pokemonDetailed.name}</p>
      <PokemonTypesList types={pokemonDetailed?.types} />
      {openModal && (
        <PokemonModal
          setIsOpen={handleClickPokemonModal}
          pokemon={pokemonDetailed}
        />
      )}
    </li>
  );
};

export default PokemonCard;
