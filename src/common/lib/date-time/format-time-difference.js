/**
 * Форматирует разницу во времени из миллисекунд в строку "X дней Y часов Z минут W секунд".
 *
 * @param {number} ms - Разница во времени в миллисекундах.
 * @returns {string} - Отформатированная строка.
 */
export const formatTimeDifference = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const parts = [];
    if (days > 0) parts.push(`${days} дн.`);
    if (hours > 0) parts.push(`${hours} ч.`);
    if (minutes > 0) parts.push(`${minutes} мин.`);
    parts.push(`${seconds} сек.`);

    return parts.join(" ");
};
