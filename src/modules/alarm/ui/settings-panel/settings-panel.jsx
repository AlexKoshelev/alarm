import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/common/ui/button/button";
import { useAudio } from "@/common/lib/audio";
import { toggleSoundResolution } from "@/modules/alarm";
import { PlusIcon } from "./plus-icon.jsx";
import { SoundOffIcon } from "./sound-off-icon.jsx";
import { SoundOnIcon } from "./sound-on-icon.jsx";

export const SettingsPanel = () => {
  const dispatch = useDispatch();
  const { soundResolution } = useSelector((state) => state.alarm);
  const { play, stop } = useAudio();

  function handleToggleSoundResolution() {
    dispatch(toggleSoundResolution());
    play({ url: "/sounds/3.mp3" });
    setTimeout(() => {
      stop();
    }, 450);
  }

  return (
    <div className="flex items-center justify-between pt-1">
      <Button
        type={soundResolution ? "danger" : "success"}
        className="px-1 inline-flex gap-x-2"
        onClick={handleToggleSoundResolution}
      >
        {soundResolution ? <>Выключить: <SoundOffIcon /></> : <>Включить: <SoundOnIcon /></>}
      </Button>
      <Link className="ml-auto" to="/create">
        <PlusIcon />
      </Link>
    </div>
  );
};
