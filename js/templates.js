import { createPosts } from './data.js';
import { showBigPicture } from './bigpicture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesBlock = document.querySelector('.pictures');
const picturesContainer = document.createDocumentFragment();

function createThumbnail(post) {
  const template = pictureTemplate.cloneNode(true);
  template.querySelector('.picture__img').setAttribute('src', post.url);
  const pictureInfo = template.querySelector('.picture__info');
  pictureInfo.querySelector('.picture__comments').textContent = post.comments.length;
  pictureInfo.querySelector('.picture__likes').textContent = post.likes;
  return template;
}

const renderTemplate = () => {
  for (const post of createPosts()) {
    const template = createThumbnail(post);
    showBigPicture(template, post);
    picturesContainer.appendChild(template);
  }
  picturesBlock.appendChild(picturesContainer);
};

export { renderTemplate };
