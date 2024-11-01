import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { rangeHoursAndMinutes, minutesToHoursAndMinutes } from "./utils";

export const TimeSelector = ({ triggerTimeMinutes, setTriggerTimeMinutes }) => {
  const { hours: currentHour, remainingMinutes: currentMinutes } =
    minutesToHoursAndMinutes(triggerTimeMinutes);

  const [hour, setHour] = useState(currentHour);
  const [minute, setMinute] = useState(currentMinutes);

  useEffect(() => {
    const minutes = hour * 60 + minute;
    setTriggerTimeMinutes(minutes);
  }, [hour, minute, setTriggerTimeMinutes]);

  const hours = rangeHoursAndMinutes(24);
  const minutes = rangeHoursAndMinutes(60);

  function handleChangeHour(e) {
    setHour(() => parseInt(e.target.value));
  }

  function handleChangeMinute(e) {
    setMinute(() => parseInt(e.target.value));
  }

  return (
    <div className="flex justify-center items-center gap-4 mb-10">
      <select
        value={hour}
        onChange={handleChangeHour}
        className="bg-gray-800 p-2 text-2xl rounded focus:outline-none focus:ring-2 focus:ring-gray-500 custom-scrollbar"
      >
        {hours.map((h) => (
          <option key={h} value={h}>
            {h.toString().padStart(2, "0")}
          </option>
        ))}
      </select>
      <span>:</span>
      <select
        value={minute}
        onChange={handleChangeMinute}
        className="bg-gray-800 p-2 text-2xl rounded focus:outline-none focus:ring-2 focus:ring-gray-500 custom-scrollbar"
      >
        {minutes.map((m) => (
          <option className="max-h-1" key={m} value={m}>
            {m.toString().padStart(2, "0")}
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
