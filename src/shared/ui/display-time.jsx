import PropTypes from "prop-types";

export const DisplayTime = ({ time }) => {
  return (
    <div>
      <p className="text-2xl">
        {time.h}:{time.m}
      </p>
    </div>
  );
};

DisplayTime.propTypes = {
  time: PropTypes.shape({
    h: PropTypes.string.isRequired,
    m: PropTypes.string.isRequired,
  }),
};
