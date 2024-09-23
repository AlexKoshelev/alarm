import PropTypes from "prop-types";
import { createTimeArray } from "../utils/create-time-array";

export const TimeSelector = ({ time, setTime }) => {
  const hours = createTimeArray(24);
  const minutes = createTimeArray(60);

  return (
    <div className="flex justify-center items-center gap-4 mb-10">
      <select
        value={time.h}
        onChange={(e) =>
          setTime((prevState) => ({ ...prevState, h: e.target.value }))
        }
        className="bg-gray-800 p-2 text-2xl rounded focus:outline-none focus:ring-2 focus:ring-gray-500 custom-scrollbar"
      >
        {hours.map((h) => (
          <option key={h} value={h}>
            {h}
          </option>
        ))}
      </select>
      <span>:</span>
      <select
        value={time.m}
        onChange={(e) =>
          setTime((prevState) => ({ ...prevState, m: e.target.value }))
        }
        className="bg-gray-800 p-2 text-2xl rounded focus:outline-none focus:ring-2 focus:ring-gray-500 custom-scrollbar"
      >
        {minutes.map((m) => (
          <option className="max-h-1" key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
    </div>
  );
};

TimeSelector.displayName = "TimeSelector";
TimeSelector.propTypes = {
  time: PropTypes.shape({
    h: PropTypes.string.isRequired,
    m: PropTypes.string.isRequired,
  }).isRequired,
  setTime: PropTypes.func.isRequired,
};
