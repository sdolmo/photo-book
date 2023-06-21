import { createClient } from "pexels";
import PropTypes from "prop-types";

const API_KEY = process.env.REACT_APP_PEXEL_API_KEY;
const client = createClient(API_KEY);
const PHOTOS_PER_PAGE = 10;

Search.propTypes = {
  updateState: PropTypes.func,
  setSearchQuery: PropTypes.func,
  searchQuery: PropTypes.string,
};

function Search({ updateState, setSearchQuery, searchQuery }) {
  async function searchPhotos(query) {
    if (query) {
      await client.photos
        .search({ query, per_page: PHOTOS_PER_PAGE })
        .then((data) => {
          updateState(data);
        });
    } else {
      await client.photos
        .curated({ per_page: PHOTOS_PER_PAGE })
        .then((data) => {
          updateState(data);
        });
    }
  }

  return (
    <nav className="search-nav">
      <input
        id="search"
        name="search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button
        id="search-btn"
        onClick={() => {
          searchPhotos(searchQuery);
        }}
      >
        <span className="icon-search"></span>
      </button>
    </nav>
  );
}

export default Search;
