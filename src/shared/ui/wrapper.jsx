import PropTypes from "prop-types";

export const Wrapper = ({ children }) => {
  return <div className="ms w-96 mx-auto p-2 m-8">{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
