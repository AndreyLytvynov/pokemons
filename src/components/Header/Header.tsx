import { FC } from "react";

import SelectedPokemonType from "../SelectedPokemonType/SelectedPokemonType";

import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerBox}>
          <Link to='/'>
            <img src='/assets/logo.png' alt='loader' width={100} height={100} />
          </Link>
          <SelectedPokemonType />
        </div>
      </div>
    </header>
  );
};

export default Header;
