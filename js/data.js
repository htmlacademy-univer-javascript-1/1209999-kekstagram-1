/* eslint-disable no-unused-vars */
import {calculateRandomNumber, getRandomElement} from './util.js';


const NAMES = [
  'Pavel',
  'Pasha',
  'Petr',
  'Petya',
  'Lev',
  'Lion',
  'Sylvester Stallone'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Поел пельменей.',
  'С бабушкой в деревне',
  'Едем кататься на санках',
  'Катаемся на санках',
  'Прыжки с трамплина',
];


// Задаем количество фотографий и диапазон лайков
const quantityPictures = 25;
const likes = {
  min: 15,
  max: 200,
};


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
    message: getRandomElement(COMMENTS),
    name: getRandomElement(NAMES)
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
    description: getRandomElement(DESCRIPTION),
    likes: calculateRandomNumber(likes.min, likes.max),
    comments: createArrayObj(getRandomElement(1, 6), createComment),
  };
}


export { resultArray };
