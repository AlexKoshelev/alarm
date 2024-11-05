import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ToggleEnabled } from "./toggle-enabled.jsx";
import { DaysList } from "./days-list";
import { TimeDisplay } from "./time-display.jsx";

export const AlarmListItem = ({ data }) => {
    const { id, daysOfWeek, triggerTimeMinutes, enabled } = data;

    return (
        <div className="flex justify-between my-2 py-5 px-4 bg-gray-800 rounded-2xl cursor-pointer relative">
            <Link to={`/edit/${id}`} className="absolute inset-0" />
            <TimeDisplay minutes={triggerTimeMinutes} />
            <div className="flex items-center gap-2">
                <DaysList daysOfWeek={daysOfWeek} />
                <ToggleEnabled enabled={enabled} id={id} />
            </div>
        </div>
    );
};

AlarmListItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        daysOfWeek: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
        selectedSoundId: PropTypes.string.isRequired,
        enabled: PropTypes.bool.isRequired,
        triggerTimeMinutes: PropTypes.number,
    }),
};
