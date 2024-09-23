// рассчет времени до ближайшего будильника

export function getTimeUntilAlarm(alarmData) {
  if (alarmData) {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    const alarmHour = parseInt(alarmData?.time.h, 10);
    const alarmMinute = parseInt(alarmData?.time.m, 10);

    // Функция для вычисления разницы во времени
    function calculateTimeDifference(targetDay, targetHour, targetMinute) {
      let daysLeft = (targetDay + 7 - currentDay) % 7;

      // Проверка на то, что время уже прошло сегодня
      if (
        daysLeft === 0 &&
        (targetHour < currentHour ||
          (targetHour === currentHour && targetMinute < currentMinute))
      ) {
        daysLeft = 7; // Если время уже прошло, то будильник сработает на следующей неделе
      }

      let hoursLeft = targetHour - currentHour;
      let minutesLeft = targetMinute - currentMinute;

      if (minutesLeft < 0) {
        minutesLeft += 60;
        hoursLeft -= 1;
      }

      if (hoursLeft < 0) {
        hoursLeft += 24;
        daysLeft -= 1;
      }

      return { days: daysLeft, hours: hoursLeft, minutes: minutesLeft };
    }

    let minTimeDifference = null;

    // Проходим по всем выбранным дням недели
    for (const day of alarmData.selectedDays) {
      const timeDifference = calculateTimeDifference(
        day % 7,
        alarmHour,
        alarmMinute
      );

      if (
        !minTimeDifference ||
        timeDifference.days < minTimeDifference.days ||
        (timeDifference.days === minTimeDifference.days &&
          timeDifference.hours < minTimeDifference.hours) ||
        (timeDifference.days === minTimeDifference.days &&
          timeDifference.hours === minTimeDifference.hours &&
          timeDifference.minutes < minTimeDifference.minutes)
      ) {
        minTimeDifference = timeDifference;
      }
    }

    // Возвращаем "0 дней 0 часов 0 минут" при срабатывании будильника
    if (
      minTimeDifference.days === 0 &&
      minTimeDifference.hours === 0 &&
      minTimeDifference.minutes === 0
    ) {
      return "0 дней 0 часов 0 минут";
    } else if (minTimeDifference.days === 0) {
      return `${
        minTimeDifference.hours > 0 ? minTimeDifference.hours + " ч. и" : ""
      } ${minTimeDifference.minutes} мин.`;
    } else {
      return `${
        minTimeDifference.days === 1
          ? minTimeDifference.days + " день"
          : minTimeDifference.days >= 2 && minTimeDifference.days <= 4
          ? minTimeDifference.days + " дня"
          : minTimeDifference.days + " дней"
      }, ${minTimeDifference.hours} ч. и ${minTimeDifference.minutes} мин.`;
    }
  }
}
