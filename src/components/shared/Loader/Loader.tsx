import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src='/assets/loader.svg' alt='loader' width={24} height={24} />
    </div>
  );
};

export default Loader;
