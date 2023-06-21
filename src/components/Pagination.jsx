import PropTypes from "prop-types";
import { usePagination, DOTS } from "./usePagination";

const API_KEY = process.env.REACT_APP_PEXEL_API_KEY;

Pagination.propTypes = {
  updateState: PropTypes.func,
  currentPageNumber: PropTypes.number,
  totalPhotos: PropTypes.number,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  onPageChange: PropTypes.func,
};

function Pagination({
  updateState,
  currentPageNumber,
  totalPhotos,
  prevPage,
  nextPage,
  onPageChange,
}) {
  const paginationRange = usePagination({
    currentPage: currentPageNumber,
    totalCount: totalPhotos,
    siblingCount: 2,
    pageSize: 10,
  });

  async function getPhotos(path) {
    const response = await fetch(path, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await response.json();
    updateState(data);
  }

  function handlePrevPage() {
    if (1 < currentPageNumber) {
      getPhotos(prevPage);
    }
  }

  function handleNextPage() {
    if (currentPageNumber <= totalPhotos) {
      getPhotos(nextPage);
    }
  }

  if (totalPhotos === 0) {
    return null;
  }

  return (
    <nav className="pagination-nav">
      {currentPageNumber === 1 ? null : (
        <button onClick={handlePrevPage}>
          <span className="icon-prev"></span>
        </button>
      )}
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber} className="pagination-item dots">
              &#8230;
            </li>
          );
        }
        return (
          <li
            key={pageNumber}
            className={`num ${
              pageNumber == currentPageNumber ? " active" : ""
            }`}
          >
            <a onClick={() => onPageChange(pageNumber)} className="page-link">
              {pageNumber}
            </a>
          </li>
        );
      })}
      {currentPageNumber === paginationRange.at(-1) ? null : (
        <button onClick={handleNextPage}>
          <span className="icon-next"></span>
        </button>
      )}
    </nav>
  );
}

export default Pagination;
