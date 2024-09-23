import { toggleAlarmStatus } from "../../app/store/alarms/thunk";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

export const ToggleStatus = ({ status, id }) => {
  const dispatch = useDispatch();

  function handleToggleStatus() {
    dispatch(toggleAlarmStatus({ status: !status, id }));
  }

  // предотвращаем всплытие события до обработчика редиректа от переключателя
  function handleStopPropagation(e) {
    e.stopPropagation();
  }
  return (
    <div
      className="flex align-middle"
      onClick={(e) => handleStopPropagation(e)}
    >
      <label className="inline-flex  cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={status}
          onChange={handleToggleStatus}
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
};

ToggleStatus.propTypes = {
  status: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};