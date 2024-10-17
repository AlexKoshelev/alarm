// возвращает день недели для массива [0,1,2,3,4,5,6]

export function getDayOfWeekLabel(dayIndex) {
  const daysOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  return daysOfWeek[Number(dayIndex)];
}
