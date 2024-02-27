import { FC } from "react";
import styles from "../../styles/main.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  handlePageChange,
}) => {
  return (
    <div className={styles.paginationWrapper}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          className={`${styles.paginationButton} ${
            currentPage === index + 1 ? styles.activeButton : ""
          }`}
          key={index}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
