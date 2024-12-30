import PropTypes from "prop-types";

const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img src={src} alt="image" />
    </div>
  );
};

export default ImageClipBox;

ImageClipBox.propTypes = {
  clipClass: PropTypes.string,
  src: PropTypes.string.isRequired,
};
