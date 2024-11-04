/**
 * Создает массив из заданного количества элементов,
 * где каждый элемент представляет собой строку с двумя цифрами.
 *
 * @param {number} length - Длина массива
 * @returns {string[]} Массив строк с двумя цифрами
 */
export const rangeHoursAndMinutes = (length) => {
    return Array.from({ length }, (_, i) => i);
};

/**
 * Преобразует минуты в объект с часами и минутами.
 *
 * @param {number} minutes - Количество минут
 * @returns {{hours: number, remainingMinutes: number}} Объект с часами и минутами
 */
export function minutesToHoursAndMinutes(minutes) {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    return { hours, remainingMinutes };
}
