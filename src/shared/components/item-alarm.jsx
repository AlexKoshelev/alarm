import PropTypes from "prop-types";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { ToggleStatus } from "./toggle-status";
import { DisplayTime } from "../ui/display-time";
import { DaysList } from "../ui/days-list";

export const ItemAlarm = memo((data) => {
  const { id, selectedDays, time, status } = data;

  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/edit/${id}`);
  }

  return (
    <div
      onClick={handleNavigation}
      className="flex justify-between my-2 py-5 px-4 bg-gray-800 rounded-2xl cursor-pointer"
    >
      <DisplayTime time={time} />
      <div className="flex items-center gap-2">
        <DaysList selectedDays={selectedDays} />
        <ToggleStatus status={status} id={id} />
      </div>
    </div>
  );
});

ItemAlarm.displayName = "ItemAlarm";

ItemAlarm.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    selectedDays: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    selectedSoundIndex: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired,
    time: PropTypes.shape({
      m: PropTypes.string.isRequired,
      h: PropTypes.string.isRequired,
    }),
  }),
};
