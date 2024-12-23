import PropTypes from "prop-types";

const BentoTilt = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

export default BentoTilt;

BentoTilt.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
