import {resultArray} from './data.js';


const template = document.querySelector('#picture').content;
const newTemplate = template.querySelector('.picture');
const photos = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();


const renderPicture = function ({url, likes, comments}) {
  const cloneOfPicture = newTemplate.cloneNode(true);
  cloneOfPicture.querySelector('img').src = url;
  cloneOfPicture.querySelector('.picture__likes').textContent = likes;
  cloneOfPicture.querySelector('.picture__comments').textContent = comments.length;
  fragment.appendChild(cloneOfPicture);
};


const renderPictures = function (pictures) {
  for (let i = 0; i < pictures.length; i++) {
    renderPicture(pictures[i]);
  }
  photos.appendChild(fragment);
};


const resultRender = renderPictures(resultArray);
export {resultRender};
