/**
 * Возвращает день недели для заданного индекса дня.
 *
 * @param {number} dayIndex - Индекс дня недели (0 - воскресенье, 1 - понедельник и т.д.)
 * @returns {string} - Строка с названием дня недели
 */

export function getDayOfWeekLabel(dayIndex) {
    const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    return daysOfWeek[Number(dayIndex)];
}
