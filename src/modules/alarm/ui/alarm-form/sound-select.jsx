import { useState, useEffect } from "react";
import { soundList } from "@/modules/alarm/model/sound-list.js";
import PropTypes from "prop-types";
import useSound from "use-sound";
import { PlayIcon } from "@/common/ui/icons/play";
import { PauseIcon } from "@/common/ui/icons/pause";

export const SoundSelect = ({ selectedSoundId, setSelectedSoundId }) => {
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [play, { stop }] = useSound(soundList[selectedSoundId].url ?? null, {
    loop: true,
  });

  useEffect(() => {
    if (selectedSoundId) {
      const selectedSound = soundList.find(
        (sound) => sound.id === selectedSoundId
      );
      if (selectedSound) {
        play();
      }
    } else {
      stop();
    }

    return () => {
      stop();
    };
  }, [selectedSoundId, play, stop]);

  const handleChange = (e) => {
    const selectedId = e.target.value;
    setSelectedSoundId(selectedId);
  };
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
  }, [selectedSoundId, stop]);

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
