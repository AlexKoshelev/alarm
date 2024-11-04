import { updateAlarm } from "@/modules/alarm/model/store/thunks.js";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

export const ToggleEnabled = ({ enabled, id }) => {
    const dispatch = useDispatch();

    function handleToggleStatus() {
        dispatch(updateAlarm({ id, enabled: !enabled }));
    }

    return (
        <div className="flex align-middle relative z-10">
            <label className="inline-flex  cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={enabled}
                    onChange={handleToggleStatus}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>
    );
};

ToggleEnabled.propTypes = {
    enabled: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
};
