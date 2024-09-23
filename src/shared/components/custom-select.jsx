import PropTypes from "prop-types";
import { usePlaySound } from "../../hooks/usePlaySound";
import { useState } from "react";
import { PlayIcon } from "../icons/play";
import { PauseIcon } from "../icons/pause";

export const CustomSelect = ({ selectedSound, setSelectedSound }) => {
  const { play, stop } = usePlaySound(selectedSound);
  const [playSound, setPlaySound] = useState(false);
  function handlePlay() {
    if (playSound === false) {
      setPlaySound(true);
      play();
    } else {
      setPlaySound(false);
      stop();
    }
  }

  return (
    <div className="flex relative">
      <select
        className="bg-gray-800  mb-8 peer block py-[10px] p-2 w-full text-gray-200 border-b-2 border-gray-200 appearance-none focus:outline-none"
        value={selectedSound}
        onChange={(e) => setSelectedSound(Number(e.target.value))}
      >
        <option disabled>Выберите звуковой сигнал</option>
        <option value={1}>79s Phones</option>
        <option value={2}>Angel`s Feather</option>
        <option value={3}>Breazee</option>
        <option value={4}>Wather sounds</option>
      </select>
      <div className=" absolute right-0 bg-gray-800 mb-8 peer block py-[7.3px] p-2  text-gray-200 border-b-2 border-gray-200 ">
        <button onClick={handlePlay}>
          {!playSound ? <PlayIcon /> : <PauseIcon />}
        </button>
      </div>
    </div>
  );
};
CustomSelect.propTypes = {
  selectedSound: PropTypes.number.isRequired,
  setSelectedSound: PropTypes.func.isRequired,
};
