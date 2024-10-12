import PropTypes from "prop-types";

export const Button = ({
  children,
  type = "success",
  onClick,
}) => {
  const hoverStyle = type === "danger" ? "hover:text-red-500" : "hover:text-lime-400";

  return (
    <button
      className={`px-6 py-2 rounded hover:bg-gray-800 ${hoverStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  hoverType: PropTypes.oneOf(["success", "danger"]),
  onClick: PropTypes.func.isRequired,
};
