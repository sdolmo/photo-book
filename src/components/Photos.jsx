import PropTypes from "prop-types";
import Photo from "./Photo";

Photos.propTypes = {
  photos: PropTypes.array,
};

function Photos({ photos }) {
  return (
    <main>
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          photo_src={photo.src.medium}
          photographer={photo.photographer}
          url={photo.url}
        />
      ))}
    </main>
  );
}

export default Photos;
