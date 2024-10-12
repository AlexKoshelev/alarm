import PropTypes from "prop-types";
import { getDayOfWeekLabel } from "@/common/lib/date-time";

export const DaysList = ({ daysOfWeek }) => (
    <p className="text-sm text-gray-300">
      {daysOfWeek.map((dayIndex) =>
          <span className="mx-1">{getDayOfWeekLabel(dayIndex)}</span>
      )}
    </p>
  );

DaysList.propTypes = {
  daysOfWeek: PropTypes.arrayOf(PropTypes.number),
};
