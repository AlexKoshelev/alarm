import PropTypes from "prop-types";
import { getDayOfWeekLabel } from "../../common/lib/date-time/get-day-of-week-label.js";
import { useEffect, useState } from "react";
import { usePlaySound } from "../../hooks/usePlaySound";

export const TriggerModal = ({ isOpen, data, toggleIsOpen }) => {
  const { selectedDays, time, selectedSoundIndex } = data;
  const [isShow, setIsShow] = useState(false);
  const { play, stop } = usePlaySound(selectedSoundIndex);

  useEffect(() => {
    if (isOpen) {
      setIsShow(isOpen);
      play();
    } else {
      stop();
    }
  }, [isOpen, play, stop]);

  function handleToggle() {
    toggleIsOpen((prevState) => !prevState);

    // задержка, чтобы увидеть анимацию переключения toggle
    setTimeout(() => {
      setIsShow(false);
    }, 1000);
  }

  return (
    <div
      className={`${
        !isShow && "hidden "
      } absolute w-auto h-full bg-gray-900 z-50`}
    >
      <button onClick={play}></button>
      <div className="ms w-96 mx-auto p-2 m-8">
        <div className="flex-col text-center justify-center align-middle ">
          <div className="mb-2">
            <p>Сработал будильник</p>
            <p className="text-3xl">
              {time.h}:{time.m}, {getDayOfWeekLabel(selectedDays[0])}
            </p>
          </div>
          <div className="mb-5">Отключить?</div>
          <div className="flex align-middle justify-center">
            <label className="inline-flex cursor-pointer">
              <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={!isOpen}
                  onChange={handleToggle}
              />
              <div
                  className="relative w-[8rem] h-[2rem] bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-lime-300 dark:peer-focus:ring-lime-500 dark:bg-gray-700 peer-checked:after:translate-x-[6rem] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[0.25rem] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.75rem] after:w-[1.75rem] after:transition-all dark:border-gray-600 peer-checked:bg-lime-400"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

TriggerModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleIsOpen: PropTypes.func.isRequired,
  data: PropTypes.shape({
    selectedDays: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    selectedSoundIndex: PropTypes.number.isRequired,
    time: PropTypes.shape({
      m: PropTypes.string.isRequired,
      h: PropTypes.string.isRequired,
    }),
  }),
};
