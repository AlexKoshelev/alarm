/**
 * Функция для сортировки будильников по времени срабатывания.
 *
 * @param {Array} alarms - Список будильников.
 * @returns {Array} - Отсортированный список будильников.
 */
export const sortAlarmsByNextTrigger = (alarms) => {
    return alarms.toSorted(
        (a, b) => a.triggerTimeMinutes - b.triggerTimeMinutes,
    );
};
