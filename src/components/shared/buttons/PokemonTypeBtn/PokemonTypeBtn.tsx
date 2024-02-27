import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./pokemonTypeBtn.module.css";

type PokemonTypeBtnProps = {
  children: React.ReactNode;
  typeName: string;
};

const PokemonTypeBtn: FC<PokemonTypeBtnProps> = ({ children, typeName }) => {
  const navigate = useNavigate();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    navigate(`/types/${typeName}`);
  };

  const dynamicClass = typeName.toLowerCase();
  const buttonClass = `${styles.pokemonTypeBtn} ${styles[dynamicClass]}`;
  return (
    <button className={buttonClass} type='button' onClick={handleClick}>
      {children}
    </button>
  );
};

export default PokemonTypeBtn;
