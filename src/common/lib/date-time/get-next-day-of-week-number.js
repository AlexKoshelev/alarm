export function getNextDayOfWeekNumber() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  return (dayOfWeek + 1) % 7;
}
