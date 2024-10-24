import { useNextAlarmCountdown } from "@/modules/alarm/model/use-next-alarm-countdown.js";
import {useSelector} from "react-redux";

export const NextAlarmCountdown = () => {
  const currentlyPlayingAlarm = useSelector((state) => state.alarm.currentlyPlayingAlarm);
  const timeRemaining = useNextAlarmCountdown();

  const nextAlarmMessage = timeRemaining
      ? `Время до следующего будильника: ${timeRemaining}`
      : 'Нет ближайших активных будильников.';


  return (
      <div>
        <p>
          {currentlyPlayingAlarm ? 'Будильник воспроизводится' : nextAlarmMessage}
        </p>
      </div>
  );
};
