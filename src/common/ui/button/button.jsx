import PropTypes from "prop-types";

export const Button = ({ children, type = "success", onClick, cls }) => {
  const hoverStyle =
    type === "danger" ? "hover:text-red-500" : "hover:text-lime-400";

  return (
    <button
      className={`px-6 py-2 rounded hover:bg-gray-800 ${hoverStyle} ${cls}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.oneOf(["success", "danger"]),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
  ]),
  cls: PropTypes.string,
};
