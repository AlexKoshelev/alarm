import { useNextAlarmCountdown } from "@/modules/alarm/model/use-next-alarm-countdown.js";
import { useSelector } from "react-redux";

export const NextAlarmCountdown = () => {
  const currentlyPlayingAlarm = useSelector(
    (state) => state.alarm.currentlyPlayingAlarm
  );
  const timeRemaining = useNextAlarmCountdown();

  const nextAlarmMessage = timeRemaining ? (
    <span>
      Время до следующего будильника: <br />
      {timeRemaining}
    </span>
  ) : (
    <span>Нет ближайших активных будильников.</span>
  );

  return (
    <div className="text-center">
      <p>
        {currentlyPlayingAlarm ? (
          <span>Будильник воспроизводится</span>
        ) : (
          nextAlarmMessage
        )}
      </p>
    </div>
  );
};
