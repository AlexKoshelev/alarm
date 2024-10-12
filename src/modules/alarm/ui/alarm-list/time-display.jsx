import PropTypes from "prop-types";

export const TimeDisplay = ({ minutes }) => {
    const isValidMinutes = Number.isInteger(minutes) && minutes >= 0 && minutes < 1440;

    if (!isValidMinutes) {
        return <span>Некорректное время</span>;
    }

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    const padNumber = (num) => num.toString().padStart(2, '0');

    const formattedTime = `${padNumber(hours)}:${padNumber(mins)}`;

    return <span>{formattedTime}</span>;
};

TimeDisplay.propTypes = {
    minutes: PropTypes.number.isRequired,
};