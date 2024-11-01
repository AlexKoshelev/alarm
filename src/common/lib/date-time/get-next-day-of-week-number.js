/**
 * Возвращает номер следующего дня недели.
 *
 * @returns {number} Номер дня недели (0 - воскресенье, 1 - понедельник и т.д.)
 */

export function getNextDayOfWeekNumber() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  return (dayOfWeek + 1) % 7;
}
