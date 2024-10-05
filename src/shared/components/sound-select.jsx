import PropTypes from "prop-types";
import { usePlaySound } from "../../hooks/usePlaySound";
import { useEffect, useState } from "react";
import { PlayIcon } from "../icons/play";
import { PauseIcon } from "../icons/pause";

export const SoundSelect = ({ selectedSoundIndex, setSelectedSoundIndex }) => {
  const { play, stop } = usePlaySound(selectedSoundIndex);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  function handlePlay() {
    if (isSoundPlaying === false) {
      setIsSoundPlaying(true);
      play();
    } else {
      setIsSoundPlaying(false);
      stop();
    }
  }

  useEffect(() => {
    setIsSoundPlaying(false);
    stop();
  }, [selectedSoundIndex, stop]);

  return (
    <div className="flex relative">
      <select
        className="bg-gray-800  mb-8 peer block py-[10px] p-2 w-full text-gray-200 border-b-2 border-gray-200 appearance-none focus:outline-none"
        value={selectedSoundIndex}
        onChange={(e) => setSelectedSoundIndex(Number(e.target.value))}
      >
        <option disabled>Выберите звуковой сигнал</option>
        <option value={0}>79s Phones</option>
        <option value={1}>Angel`s Feather</option>
        <option value={2}>Breazee</option>
        <option value={3}>Wather sounds</option>
      </select>
      <div className=" absolute right-0 bg-gray-800 mb-8 peer block py-[7.3px] p-2  text-gray-200 border-b-2 border-gray-200 ">
        <button onClick={handlePlay}>
          {!isSoundPlaying ? <PlayIcon /> : <PauseIcon />}
        </button>
      </div>
    </div>
  );
};
SoundSelect.propTypes = {
  selectedSoundIndex: PropTypes.number.isRequired,
  setSelectedSoundIndex: PropTypes.func.isRequired,
};
