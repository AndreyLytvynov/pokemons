import { useEffect, useState } from "react";

import { useGetAllPokemonQuery } from "../services/pokemonService";

import PokemonList from "../components/PokemonList/PokemonList";
import Loader from "../components/shared/Loader/Loader";
import Button from "../components/shared/buttons/Button/Button";

import { TPokemon } from "../types";
import styles from "../styles/main.module.css";

function Home() {
  const [offset, setOffset] = useState<number>(0);
  const [pokemons, setPokemons] = useState<TPokemon[]>([]);

  const limit = 24;

  const { data, isLoading, isFetching } = useGetAllPokemonQuery({
    limit,
    offset,
  });

  useEffect(() => {
    setPokemons([]);
  }, []);

  useEffect(() => {
    if (data && data.results) {
      setPokemons((prev) => [...prev, ...data.results]);
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className='section'>
      <div className='container'>
        <h1>All pokemons</h1>

        <PokemonList pokemons={pokemons} />
        {isFetching ? (
          <Loader />
        ) : (
          <Button
            buttonClass={styles.loadMoreBtn}
            onClick={() => {
              setOffset((prev) => prev + limit);
            }}
          >
            Loading more
          </Button>
        )}
      </div>
    </section>
  );
}

export default Home;
