import useSound from "use-sound";
import s1 from "../assets/1.mp3";
import s2 from "../assets/2.mp3";
import s3 from "../assets/3.mp3";
import s4 from "../assets/4.mp3";
// для проигрывания звуков, принимает индекс массива, зацикливает звук

export const usePlaySound = (val) => {
  const sounds = [s1, s2, s3, s4];
  const [play, { stop }] = useSound(sounds[val], { loop: true });
  return { play, stop };
};
