
/**
 * Вспомогательная функция для вычисления следующего срабатывания будильника.
 *
 * @param {Object} alarm - Будильник.
 * @param {Date} currentDate - Текущее дата и время.
 * @returns {Date|null} - Дата и время следующего срабатывания будильника или null, если не найдено.
 */
const calculateTriggerDate = (alarm, currentDate) => {
    const { triggerTimeMinutes, daysOfWeek } = alarm;
    const currentDay = currentDate.getDay(); // 0 (воскресенье) - 6 (суббота)
    const currentMinutes = currentDate.getHours() * 60 + currentDate.getMinutes();

    // Создадим массив объектов с днем недели и разницей в днях от текущего дня
    const sortedDaysAhead = daysOfWeek
        .map(day => ({
            day,
            difference: (day - currentDay + 7) % 7
        }))
        .sort((a, b) => a.difference - b.difference);

    for (let i = 0; i < sortedDaysAhead.length; i++) {
        const { day, difference } = sortedDaysAhead[i];
        const triggerDate = new Date(currentDate);
        triggerDate.setDate(currentDate.getDate() + difference);
        triggerDate.setHours(0, 0, 0, 0); // Сброс часов, минут и секунд
        triggerDate.setMinutes(triggerTimeMinutes);

        if (difference === 0 && triggerTimeMinutes <= currentMinutes) {
            // Если будильник сегодня, но время уже прошло, пропустим
            continue;
        }

        return triggerDate;
    }

    // Если ни один будильник не сработает в ближайшие дни, вернем null
    return null;
};

/**
 * Функция для поиска следующего активного будильника.
 *
 * @param {Array} alarms - Список будильников.
 * @returns {Object|null} - Следующий активный будильник с датой срабатывания или null.
 */
export const getNextAlarm = (alarms) => {
    const currentDate = new Date()
    const enabledAlarms = alarms.filter(alarm => alarm.enabled);

    let nextAlarm = null;
    let minTimeDifference = Infinity;

    enabledAlarms.forEach(alarm => {
        const triggerDate = calculateTriggerDate(alarm, currentDate);
        if (triggerDate) {
            const timeDifference = triggerDate - currentDate;
            if (timeDifference < minTimeDifference) {
                minTimeDifference = timeDifference;
                nextAlarm = { ...alarm, triggerDate };
            }
        }
    });

    return nextAlarm;
};