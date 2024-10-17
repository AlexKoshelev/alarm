import { useNextAlarmCountdown } from "@/modules/alarm/model/use-next-alarm-countdown.js";

export const NextAlarmCountdown = () => {
  const timeRemaining = useNextAlarmCountdown();

  return (
    <div>
      {timeRemaining ? (
        <p>Время до следующего будильника: {timeRemaining}</p>
      ) : (
        <p>Нет ближайших активных будильников.</p>
      )}
    </div>
  );
};
