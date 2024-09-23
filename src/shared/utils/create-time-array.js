// генерируем массив чисел для серектора выбора времени (часов и минут)

export const createTimeArray = (length) => {
  return Array.from({ length }, (_, i) => i.toString().padStart(2, "0"));
};
