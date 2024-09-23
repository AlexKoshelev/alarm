import { OneDay } from "./one-day";
import PropTypes from "prop-types";

export const DaysList = ({ selectedDays }) => {
  function getDayOfWeek(number) {
    return <OneDay key={number} day={number} />;
  }

  return (
    <p className="text-sm text-gray-300">
      {selectedDays.sort().map((d) => getDayOfWeek(d))}
    </p>
  );
};
DaysList.propTypes = {
  selectedDays: PropTypes.arrayOf(PropTypes.number),
};
