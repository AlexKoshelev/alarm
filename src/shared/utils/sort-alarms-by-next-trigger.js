// сортировка всех будильников по времени срабатывания

function getNextTriggerTime(alarm) {
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  let minDaysToNextTrigger = Infinity;
  let nextTriggerTime;

  for (let day of alarm.selectedDays) {
    // Преобразуем день недели в формат JavaScript
    const jsDay = day === 7 ? 0 : day;

    // Вычисляем количество дней до следующего срабатывания
    let daysToNextTrigger = jsDay - currentDay;
    if (
      daysToNextTrigger < 0 ||
      (daysToNextTrigger === 0 &&
        (parseInt(alarm.time.h) < currentHour ||
          (parseInt(alarm.time.h) === currentHour &&
            parseInt(alarm.time.m) <= currentMinute)))
    ) {
      daysToNextTrigger += 7; // если день уже прошел на этой неделе, добавляем неделю
    }

    // Если это ближайший день, вычисляем точное время срабатывания
    if (daysToNextTrigger < minDaysToNextTrigger) {
      minDaysToNextTrigger = daysToNextTrigger;
      nextTriggerTime = new Date(now);
      nextTriggerTime.setDate(now.getDate() + daysToNextTrigger);
      nextTriggerTime.setHours(
        parseInt(alarm.time.h),
        parseInt(alarm.time.m),
        0,
        0
      );
    }
  }

  return nextTriggerTime;
}

export function sortAlarmsByNextTrigger(alarms) {
  const activeAlarms = alarms.filter((alarm) => alarm.status);
  const disabledAlarms = alarms.filter((alarm) => !alarm.status);

  activeAlarms.sort((a, b) => getNextTriggerTime(a) - getNextTriggerTime(b));
  disabledAlarms.sort((a, b) => getNextTriggerTime(a) - getNextTriggerTime(b));

  return [...activeAlarms, ...disabledAlarms];
}
