/**
 * Функция, возвращающая случайное целое число из переданного диапазона включительно.
 *
 * @param {number} min - минимальное число диапазона
 * @param {number} max - максимальное число диапазона
 * @returns {number} - случайное число из диапазона
 */
function calculateRandomNumber(min, max) {
  if (min < 0 || min >= max) {
    throw {name : 'Invalid arguments', message : 'you passed invalid arguments'};
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

calculateRandomNumber(12, 43);

/**
 * Функция для проверки максимальной длины строки.
 *
 * @param {object} verifiableString - проверяемая строка
 * @param {number} maxLenght - максимальная длина строки
 * @returns {boolean} - true, если строка проходит по длине, и false — если не проходит
 */
function сheckLengthOfString(verifiableString, maxLenght) {
  verifiableString = String(verifiableString);
  if (verifiableString.length < maxLenght) {
    return true;
  }
  return false;
}

сheckLengthOfString('zxcqweasdqweasdzxc', 122);
