import PropTypes from "prop-types";
export const Modal = ({ children }) => {
  return (
    <div
      className={`absolute top-0 w-full h-full bg-gray-900 text-gray-50 z-50`}
    >
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
