import { useState, useEffect, FC, MouseEvent } from "react";
import { createPortal } from "react-dom";
import PokemonStatsTable from "../PokemonStatsTable/PokemonStatsTable";

import styles from "./pokemonModal.module.css";
import { PokemonDetailed } from "../../types";

type ModalProps = {
  pokemon: PokemonDetailed;
  setIsOpen: () => void;
};

const PokemonModal: FC<ModalProps> = ({ setIsOpen, pokemon }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.body.classList.add("blockScroll");
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setIsOpen();
      }
    });
    setMounted(true);
    return () => {
      document.body.classList.remove("blockScroll");
    };
  }, [setIsOpen]);

  const onClose = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setIsOpen();
    }
  };

  return mounted
    ? createPortal(
        <div className={styles.backdrop} onClick={onClose}>
          <div className={styles.modal}>
            <img
              src={
                pokemon.sprites.back_default ||
                pokemon.sprites.front_default ||
                "https://res.cloudinary.com/dn5s7eije/image/upload/v1708622607/custom_folder/1708624937481.jpg"
              }
              alt='pokemon'
              width={200}
              height={200}
            />
            <p>{pokemon.name}</p>
            <PokemonStatsTable pokemon={pokemon} />
            <button className={styles.closeBtn} onClick={onClose}>
              X
            </button>
          </div>
        </div>,
        document.body
      )
    : null;
};
export default PokemonModal;
