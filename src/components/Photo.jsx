import PropTypes from "prop-types";

Photo.propTypes = {
  photo_src: PropTypes.string,
  photographer: PropTypes.string,
  url: PropTypes.string,
};

function Photo({ photo_src, photographer, url }) {
  return (
    <section className="photo">
      <img src={photo_src} />
      <p>
        <strong>Photographer:</strong> {photographer}
      </p>
      <a href={url} target="_blank" rel="noreferrer">
        More Details
      </a>
    </section>
  );
}

export default Photo;
