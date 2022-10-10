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

/**
 * Функция для проверки максимальной длины строки.
 *
 * @param {string} verifiableString - проверяемая строка
 * @param {number} maxLenght - максимальная длина строки
 * @returns {boolean} - true, если строка проходит по длине, и false — если не проходит
 */
// eslint-disable-next-line no-unused-vars
const сheckLengthOfString = (verifiableString, maxLenght) => verifiableString.length < maxLenght;

/**
 * Функция, возвращающая случайный элемент из переданного массива.
 *
 * @param {object} array - массив из которого нужно выбрать элемент
 * @returns - случайный элемент из массива
 */
const getRandomElement = (array) => array[calculateRandomNumber(0, array.length - 1)];

export {calculateRandomNumber, getRandomElement};
