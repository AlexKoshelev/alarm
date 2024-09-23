import PropTypes from "prop-types";
import { getDayWeek } from "../utils/get-day-week";

export const OneDay = ({ day }) => {
  return <span className="mx-1">{getDayWeek(day)}</span>;
};

OneDay.propTypes = {
  day: PropTypes.number.isRequired,
};
