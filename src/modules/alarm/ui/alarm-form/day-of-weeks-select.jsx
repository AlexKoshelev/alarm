import PropTypes from "prop-types";

export const DayOfWeekSelect = ({ selectedDays, setSelectedDays }) => {
  const toggleDay = (day) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((d) => d !== day)
        : [...prevSelectedDays, day]
    );
  };

  const days = [
    { value: 1, label: "Пн" },
    { value: 2, label: "Вт" },
    { value: 3, label: "Ср" },
    { value: 4, label: "Чт" },
    { value: 5, label: "Пт" },
    { value: 6, label: "Сб" },
    { value: 0, label: "Вс" },
  ];

  return (
    <div className="flex gap-2 mb-4">
      {days.map((day) => (
        <button
          key={day.value}
          onClick={() => toggleDay(day.value)}
          className={`w-10 h-10 rounded-full ${
            selectedDays.includes(day.value)
              ? "bg-gray-800  text-lime-400"
              : `bg-gray-900 ${
                  (day.value === 0 || day.value === 6) && "text-red-500"
                }`
          }`}
        >
          {day.label}
        </button>
      ))}
    </div>
  );
};

DayOfWeekSelect.propTypes = {
  selectedDays: PropTypes.array.isRequired,
  setSelectedDays: PropTypes.func.isRequired,
};
