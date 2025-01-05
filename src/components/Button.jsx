import PropTypes from "prop-types";

const Button = ({ id, title, leftIcon, rightIcon, containerClass, ariaLabel }) => {
  return (
    <button
      id={id}
      aria-label={ariaLabel}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;

Button.propTypes = {
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
  title: PropTypes.string.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  containerClass: PropTypes.string,
};