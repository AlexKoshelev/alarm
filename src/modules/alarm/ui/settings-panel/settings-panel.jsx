import { Link } from "react-router-dom";
import { PlusIcon } from "./plus-icon.jsx";
import { Button } from "@/common/ui/button/button";
import { useDispatch, useSelector } from "react-redux";
import { toggleSoundResolution } from "@/modules/alarm/model/store/action-creators.js";
import useSound from "use-sound";
import { SoundOffIcon } from "./sound-off-icon.jsx";
import { SoundOnIcon } from "./sound-on-icon.jsx";

export const SettingsPanel = () => {
  const dispatch = useDispatch();
  const { soundResolution } = useSelector((state) => state.alarm);
  const [play, { stop }] = useSound("/sounds/3.mp3");

  function handleSubmit() {
    dispatch(toggleSoundResolution());
    play();
    setTimeout(() => {
      stop();
    }, 450);
  }

  return (
    <div className="flex items-center justify-between pt-1">
      <Button
        type={soundResolution ? "danger" : "success"}
        cls="px-1"
        onClick={handleSubmit}
      >
        {soundResolution ? <SoundOffIcon /> : <SoundOnIcon />}
      </Button>
      <Link className="ml-auto" to="/create">
        <PlusIcon />
      </Link>
    </div>
  );
};
