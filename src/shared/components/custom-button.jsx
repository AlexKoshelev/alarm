import PropTypes from "prop-types";

export const CustomButton = ({
  textContent,
  hoverType = "lime",
  handleClick,
}) => {
  function getHover() {
    return hoverType === "red" ? "hover:text-red-500" : "hover:text-lime-400";
  }
  return (
    <button
      className={`px-6 py-2 rounded hover:bg-gray-800 ${getHover()}`}
      onClick={handleClick}
    >
      {textContent}
    </button>
  );
};
CustomButton.propTypes = {
  textContent: PropTypes.string.isRequired,
  hoverType: PropTypes.oneOf(["red", "lime"]),
  handleClick: PropTypes.func.isRequired,
};
