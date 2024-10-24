import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { soundList } from "@/modules/alarm/model/sound-list.js";
import { useAudio } from "@/common/lib/audio";
import { PlayIcon } from "./play";
import { PauseIcon } from "./pause";

export const SoundSelect = ({ selectedSoundId, setSelectedSoundId }) => {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const { play, stop } = useAudio();

  const handleChange = (e) => {
    const selectedId = e.target.value;
    setSelectedSoundId(selectedId);
  };

  function handlePlay() {
    setIsSoundPlaying(prev => !prev)
  }

  useEffect(() => {
    setIsSoundPlaying(false)
  }, [selectedSoundId]);

  useEffect(() => {
    if (isSoundPlaying) {
      const url = soundList[selectedSoundId].url;
      if (url) {
        play({ url, loop: true });
      }
    } else {
      stop();
    }
  }, [isSoundPlaying])

  return (
    <div className="flex relative">
      <select
        className="bg-gray-800  mb-8 peer block py-[10px] p-2 w-full text-gray-200 border-b-2 border-gray-200 appearance-none focus:outline-none"
        value={selectedSoundId}
        onChange={handleChange}
      >
        <option disabled>Выберите звуковой сигнал</option>
        {soundList.map((sound) => (
          <option key={sound.id} value={sound.id}>
            {sound.name}
          </option>
        ))}
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
  selectedSoundId: PropTypes.string.isRequired,
  setSelectedSoundId: PropTypes.func.isRequired,
};
