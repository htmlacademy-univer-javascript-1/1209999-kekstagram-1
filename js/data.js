import { calculateRandomNumber, randomArrayElement, stringByTemplate } from './util.js';

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

const photosTemplate = 'photos/{{i}}.jpg';
const avatarsTemplate = 'img/avatar-{{число от 1 до 6}}.svg';

const createComment = () => {
  let message = '';
  const sentencesNumber = calculateRandomNumber(1, 2);
  for (let i = 0; i < sentencesNumber; i++) {
    message += ` ${randomArrayElement(COMMENTS)}`;
  }
  return {
    id: calculateRandomNumber(0, 25000),
    avatar: stringByTemplate(avatarsTemplate, calculateRandomNumber(1, 6)),
    message: message,
    name: randomArrayElement(NAMES),
  };
};

const createComments = () => Array.from({length: calculateRandomNumber(1, 3)}, createComment);

const createPost = () => ({
  id: calculateRandomNumber(1, 25),
  url: stringByTemplate(photosTemplate, calculateRandomNumber(1, 25)),
  description: randomArrayElement(DESCRIPTION),
  likes: calculateRandomNumber(15, 200),
  comments: createComments()
});

const createPosts = () => Array.from({length: 25}, createPost);

export { createPosts, createPost };
