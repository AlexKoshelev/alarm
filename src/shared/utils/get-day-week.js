// возвращает день недели для массива [1,2,3,4,5,6,7]

export function getDayWeek(day) {
  const daysOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  return daysOfWeek[Number(day) - 1];
}
