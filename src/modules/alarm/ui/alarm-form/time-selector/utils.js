/**
 * Создает массив из заданного количества элементов,
 * где каждый элемент представляет собой строку с двумя цифрами.
 *
 * @param {number} length - Длина массива
 * @returns {string[]} Массив строк с двумя цифрами
 */
export const createTimeArray = (length) => {
  return Array.from({ length }, (_, i) => i.toString().padStart(2, "0"));
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

/**
 * Добавляет ведущий ноль к числу, если оно меньше 10.
 *
 * @param {number} num - Число для форматирования
 * @returns {number} Строка с двумя цифрами или само число
 */
export function addLeadingZero(num) {
  return num < 10 ? "0" + num : String(num);
}

/**
 * Удаляет ведущий ноль из строки и возвращает число.
 *
 * @param {string} str - Число для обработки
 * @returns {number} Обработанное число без ведущего нуля
 */
export function removeLeadingZero(str) {
  return Number(str.toString().replace(/^0+/, ""));
}
