import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import { soundList } from "@/modules/alarm/model/sound-list.js";
import {
  setCurrentlyPlayingAlarm,
  sortAlarms,
} from "@/modules/alarm/model/store/action-creators.js";

export const AlarmTriggerModal = () => {
  const dispatch = useDispatch();
  const currentlyPlayingAlarm = useSelector(
    (state) => state.alarm.currentlyPlayingAlarm
  );

  const selectedSound = soundList.find(
    (sound) => sound.id === currentlyPlayingAlarm?.selectedSoundId
  );
  const [play, { stop }] = useSound(selectedSound ? selectedSound.url : null, {
    loop: true,
  });

  useEffect(() => {
    if (currentlyPlayingAlarm && selectedSound) {
      play();
    }
    return () => {
      stop();
    };
  }, [currentlyPlayingAlarm, selectedSound, play, stop]);

  const handleConfirm = () => {
    stop();
    dispatch(setCurrentlyPlayingAlarm(null));
    dispatch(sortAlarms());
  };

  if (!currentlyPlayingAlarm) return null;

  return (
    <div>
      <h2>Будильник</h2>
      <button onClick={handleConfirm}>OK</button>
    </div>
  );
};
