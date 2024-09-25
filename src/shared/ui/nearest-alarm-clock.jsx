import { useDispatch, useSelector } from "react-redux";
import { getDayWeek } from "../utils/get-day-week";
import { getNextDateForDayOfWeek } from "../utils/get-next-date-for-day-of-week";
import { getTimeUntilAlarm } from "../utils/get-time-until-alarm";
import { memo, useEffect, useMemo, useState } from "react";
import { sortByNextTigger } from "../../app/store/alarms/actionCreators";
import { TriggerModal } from "../components/trigger-modal";

const useNearestAlarm = (alarms) => {
  return useMemo(() => alarms[0] || null, [alarms]);
};

export const NearestAlarmClock = memo(() => {
  const dispatch = useDispatch();
  const { alarms } = useSelector((state) => state.alarms);
  const [isOpen, setIsOpen] = useState(false);

  const nearestAlarm = useNearestAlarm(alarms);

  const [timeUntilAlarm, setTimeUntilAlarm] = useState(
    getTimeUntilAlarm(nearestAlarm)
  );

  useEffect(() => {
    // если сработал будильник, открываем модалку
    if (timeUntilAlarm === "0 дней 0 часов 0 минут") setIsOpen(true);
  }, [timeUntilAlarm]);

  useEffect(() => {
    // при изменении ближайшего будильника, сортируем список
    dispatch(sortByNextTigger());
  }, [timeUntilAlarm, dispatch]);

  useEffect(() => {
    // проверяем время до ближайшего будильника каждую секунду
    const intervalId = setInterval(() => {
      setTimeUntilAlarm(getTimeUntilAlarm(nearestAlarm));
    }, 1000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [nearestAlarm, dispatch]);

  // если будильников нет, то ничего не отображаем
  if (alarms.length === 0) return null;

  if (!nearestAlarm.status)
    // если все будильники имеют статус false, то отображаем заглушку
    return <div className="p-8 text-center">Все будильники отключены</div>;

  return (
    <>
      <TriggerModal
        isOpen={isOpen}
        toggleIsOpen={setIsOpen}
        data={nearestAlarm}
      />

      <div className="p-8 text-center">
        <p className="text-xl sm:text-3xl">Будильник через</p>
        <p className="text-3xl">{timeUntilAlarm}</p>
        <p className="text-sm text-gray-300">
          {getDayWeek(nearestAlarm.selectedDays[0])},{" "}
          {getNextDateForDayOfWeek(nearestAlarm.selectedDays[0])},{" "}
          {nearestAlarm.time.h}:{nearestAlarm.time.m}
        </p>
      </div>
    </>
  );
});
NearestAlarmClock.displayName = "NearestAlarmClock";
