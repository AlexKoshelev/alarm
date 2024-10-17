import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  addLeadingZero,
  createTimeArray,
  minutesToHoursAndMinutes,
  removeLeadingZero,
} from "./utils";

export const TimeSelector = ({ triggerTimeMinutes, setTriggerTimeMinutes }) => {
  const { hours: currentHour, remainingMinutes: currentMinutes } =
    minutesToHoursAndMinutes(triggerTimeMinutes);

  const [selectorsTime, setSelectorsTime] = useState({
    h: currentHour,
    m: currentMinutes,
  });

  useEffect(() => {
    const minutes = selectorsTime.h * 60 + selectorsTime.m;
    setTriggerTimeMinutes(minutes);
  }, [selectorsTime, setTriggerTimeMinutes]);

  const hours = createTimeArray(24);
  const minutes = createTimeArray(60);

  return (
    <div className="flex justify-center items-center gap-4 mb-10">
      <select
        value={addLeadingZero(selectorsTime.h)}
        onChange={(e) =>
          setSelectorsTime((prevState) => ({
            ...prevState,
            h: removeLeadingZero(e.target.value),
          }))
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
        value={addLeadingZero(selectorsTime.m)}
        onChange={(e) =>
          setSelectorsTime((prevState) => ({
            ...prevState,
            m: removeLeadingZero(e.target.value),
          }))
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
  triggerTimeMinutes: PropTypes.number.isRequired,
  setTriggerTimeMinutes: PropTypes.func.isRequired,
};
