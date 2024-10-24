import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAudio } from "@/common/lib/audio";
import { Button } from "@/common/ui/button";
import { Modal } from "@/common/ui/modal";
import { setCurrentlyPlayingAlarm, sortAlarms } from "../../model/store/action-creators.js";
import { soundList } from "../../model/sound-list";

export const AlarmTriggerModal = () => {
  const currentlyPlayingAlarm = useSelector((state) => state.alarm.currentlyPlayingAlarm);
  const selectedSound = soundList.find(
    (sound) => sound.id === currentlyPlayingAlarm?.selectedSoundId
  );
  const dispatch = useDispatch();
  const { soundResolution } = useSelector((state) => state.alarm);

  const { play, stop } = useAudio();

  useEffect(() => {
    if (currentlyPlayingAlarm && soundResolution && selectedSound) {
      const url = selectedSound.url;
      if (url) {
        play({ url, loop: true });
      }
    }
    return () => {
      stop();
    };
  }, [currentlyPlayingAlarm, soundResolution]);

  const handleConfirm = () => {
    stop();
    dispatch(setCurrentlyPlayingAlarm(null));
    dispatch(sortAlarms());
  };

  return (
    <Modal isOpen={!currentlyPlayingAlarm} onClose={handleConfirm}>
      <div className="flex-col text-center justify-center align-middle">
        <div className="mb-5">Сработал будильник</div>
        <div className="flex align-middle justify-center">
          <Button onClick={handleConfirm}>Отключить</Button>
        </div>
      </div>
    </Modal>
  );
};
