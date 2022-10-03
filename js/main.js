/* eslint-disable no-unused-vars */
// Подключаем файл с набор данных
const dataSet = document.createElement('dataSet');
// Задаем количество фотографий и диапазон лайков
const quantityPictures = 25;
const likes = {
  min: 15,
  max: 200,
};
dataSet.src = '/dataSet.js';
document.head.appendChild(dataSet);


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
const сheckLengthOfString = (verifiableString, maxLenght) => verifiableString.length < maxLenght;


/**
 * Функция, возвращающая случайный элемент из переданного массива.
 *
 * @param {object} array - массив из которого нужно выбрать элемент
 * @returns - случайный элемент из массива
 */
const getRandomElement = (array) => array[calculateRandomNumber(0, array.length - 1)];


/**
 * Функция, создающая комментарий к фотографии.
 *
 * @param {number} id - случайное число. Идентификаторы не должны повторяться.
 * @returns {object} - комментарий в виде объекта.
 */
function createComment(id){
  return {
    id: calculateRandomNumber(1, 500),
    avatar: `img/avatar-${id}.svg`,
    message: getRandomElement(dataSet.COMMENTS),
    name: getRandomElement(dataSet.NAMES)
  };
}


/**
 * Функция, создающая комментарий к фотографии.
 *
 * @param {number} len - длинна создаваемого массива(пустого).
 * @param {function} func - функция, которая будет заполнять массив.
 * @returns {array}
 */
const createArrayObj = (len, func) => Array.from({length: len}).map((value, index) => func(index + 1));


// Массив из quantityPictures сгенерированных объектов.
const resultArray = createArrayObj(quantityPictures, createDescription);


/**
 * Функция, создающая комментарий к фотографии.
 *
 * @param {number} id - случайное число. Идентификаторы не должны повторяться.
 * @returns {object} - информация о фотографии.
 */
function createDescription(id){
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(dataSet.DESCRIPTION),
    likes: calculateRandomNumber(likes.min, likes.max),
    comments: createArrayObj(getRandomElement(1, 6), createComment),
  };
}
