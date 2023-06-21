import { useEffect, useState } from "react";
import { createClient } from "pexels";

import Search from "./components/Search";
import Photos from "./components/Photos";
import Pagination from "./components/Pagination.jsx";

import "./assets/css/App.css";

const API_KEY = process.env.REACT_APP_PEXEL_API_KEY;
const client = createClient(API_KEY);
const PHOTOS_PER_PAGE = 10;

function App() {
  const [photos, setPhotos] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function updateState(newState) {
    setPhotos(newState?.photos);
    setCurrentPageNumber(newState?.page);
    setTotalPhotos(newState?.total_results);
    setPrevPage(newState?.prev_page);
    setNextPage(newState?.next_page);
  }

  async function initializePhotos() {
    await client.photos.curated({ per_page: PHOTOS_PER_PAGE }).then((data) => {
      updateState(data);
    });
  }

  async function onPageChange(pageNumber) {
    if (searchQuery !== "") {
      await client.photos

        .search({
          query: searchQuery,
          page: pageNumber,
          per_page: PHOTOS_PER_PAGE,
        })
        .then((data) => {
          updateState(data);
        });
    } else {
      await client.photos
        .curated({ page: pageNumber, per_page: PHOTOS_PER_PAGE })
        .then((data) => {
          updateState(data);
        });
    }
    setCurrentPageNumber(pageNumber);
  }

  useEffect(() => {
    if (photos.length == 0) {
      initializePhotos();
    }
  }, [initializePhotos]);

  return (
    <>
      <Search
        updateState={updateState}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />

      <Photos photos={photos} />

      <Pagination
        updateState={updateState}
        totalPhotos={totalPhotos}
        currentPageNumber={currentPageNumber}
        prevPage={prevPage}
        nextPage={nextPage}
        onPageChange={onPageChange}
      />
    </>
  );
}

export default App;
