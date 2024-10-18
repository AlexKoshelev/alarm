import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import {
  setCurrentlyPlayingAlarm,
  sortAlarms,
} from "@/modules/alarm/model/store/action-creators.js";
import { Button } from "@/common/ui/button/button";
import { soundList } from "@/modules/alarm/model/sound-list";
import { Modal } from "@/common/ui/modal/modal";
export const AlarmTriggerModal = () => {
  const currentlyPlayingAlarm = useSelector(
    (state) => state.alarm.currentlyPlayingAlarm
  );
  const selectedSound = soundList.find(
    (sound) => sound.id === currentlyPlayingAlarm?.selectedSoundId
  );
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [play, { stop }] = useSound(selectedSound ? selectedSound.url : null, {
    loop: true,
  });

  useEffect(() => {
    setTimeout(() => {
      if (currentlyPlayingAlarm && selectedSound) {
        if (inputRef?.current) {
          inputRef?.current.click();

          play();
        }
      }
    }, 0);

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
    <Modal>
      <button
        ref={inputRef}
        id="autoPlayTrigger"
        onClick={() => {
          play();
        }}
        style={{ display: "none" }}
      />
      <div className="ms w-96 mx-auto p-2 m-8 ">
        <div className="flex-col text-center justify-center align-middle ">
          <div className="mb-5 ">Сработал будильник</div>
          <div className="flex align-middle justify-center">
            <Button onClick={handleConfirm}>Отключить</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
