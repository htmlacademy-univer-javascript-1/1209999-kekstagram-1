import {resultArray} from './util.js';
import {renderBigPicture} from './bigPicture.js';


const newTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesArr = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();


const renderPicture = function ({url, likes, comments, description}) {
  const pictureClone = newTemplate.cloneNode(true);
  pictureClone.querySelector('.picture__img').src = url;
  pictureClone.querySelector('.picture__likes').textContent = likes;
  pictureClone.querySelector('.picture__comments').textContent = comments.length;
  pictureClone.addEventListener('click', (evt) => {
    evt.preventDefault();
    renderBigPicture({url, likes, comments, description});
  });
  fragment.append(pictureClone);
};


const renderPictures = function (pictures) {
  for (let i = 0; i < pictures.length; i++) {
    renderPicture(pictures[i]);
  }
  picturesArr.append(fragment);
};


const resultRender = renderPictures(resultArray);
export {resultRender};
