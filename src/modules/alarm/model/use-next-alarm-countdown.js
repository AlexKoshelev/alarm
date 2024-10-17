import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectNextAlarm } from "@/modules/alarm/model/store/selectors.js";
import { formatTimeDifference } from "@/common/lib/date-time/index.js";

/**
 * Кастомный хук для вычисления времени, оставшегося до следующего активного будильника.
 *
 * @returns {string|null} - Строка с оставшимся временем или null, если будильник не найден.
 */
export const useNextAlarmCountdown = () => {
  const nextAlarm = useSelector(selectNextAlarm);

  const [timeRemaining, setTimeRemaining] = useState(null);
  useEffect(() => {
    if (!nextAlarm || !nextAlarm.triggerDate) {
      setTimeRemaining(null);
      return;
    }

    const updateTime = () => {
      const now = new Date();
      const diff = nextAlarm.triggerDate - now;

      if (diff <= 0) {
        setTimeRemaining(null);
        return;
      }

      const formatted = formatTimeDifference(diff);
      setTimeRemaining(formatted);
    };

    // Инициализируем время сразу после монтирования
    updateTime();

    // Устанавливаем интервал для обновления каждую секунду
    const intervalId = setInterval(updateTime, 1000);

    // Очищаем интервал при размонтировании или изменении nextAlarm
    return () => clearInterval(intervalId);
  }, [nextAlarm]);

  return timeRemaining;
};
