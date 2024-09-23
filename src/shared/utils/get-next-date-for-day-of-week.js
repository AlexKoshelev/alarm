// возвращает даду срабатывания ближайшего будильника

export function getNextDateForDayOfWeek(targetDay) {
  const now = new Date();
  const currentDay = now.getDay();

  // Преобразуем день недели из формата 1-7 (где 7 — воскресенье) в формат JavaScript
  const jsTargetDay = targetDay % 7;

  let daysToAdd = jsTargetDay - currentDay;

  // Если целевой день недели уже прошел на этой неделе, добавляем неделю
  if (daysToAdd <= 0) {
    daysToAdd += 7;
  }

  const nextDate = new Date(now);
  nextDate.setDate(now.getDate() + daysToAdd);

  return nextDate.toLocaleDateString("ru-RU", {
    month: "short",
    day: "numeric",
  });
}
