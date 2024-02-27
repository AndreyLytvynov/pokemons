import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPokemonsByTypeQuery } from "../services/pokemonService";

import PokemonCard from "../components/PokemonCard/PokemonCard";
import Loader from "../components/shared/Loader/Loader";
import Button from "../components/shared/buttons/Button/Button";

import styles from "../styles/main.module.css";
import Pagination from "../components/Pagination/Pagination";

const PokemonByTypes = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetPokemonsByTypeQuery(type as string);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const handleGoBackClick = () => {
    navigate(-1);
  };

  const indexOfLastPokemon = currentPage * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;

  const currentPokemon = data?.pokemon.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className='section'>
      <div className='container'>
        {data && !isLoading ? (
          <>
            <h1>{data.name}</h1>
            <Button onClick={handleGoBackClick}>Go back</Button>
            <ul className={styles.pokemonsList}>
              {currentPokemon?.map(({ pokemon }) => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
              ))}
            </ul>
            <Pagination
              totalPages={Math.ceil(data.pokemon.length / itemsPerPage)}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default PokemonByTypes;
