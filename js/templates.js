import { showBigPicture } from './bigpicture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesBlock = document.querySelector('.pictures');
const picturesContainer = document.createDocumentFragment();

function createTemplate(post) {
  const template = pictureTemplate.cloneNode(true);
  template.querySelector('.picture__img').setAttribute('src', post.url);
  const pictureInfo = template.querySelector('.picture__info');
  pictureInfo.querySelector('.picture__comments').textContent = post.comments.length;
  pictureInfo.querySelector('.picture__likes').textContent = post.likes;
  return template;
}

const renderTemplate = (posts) => {
  for (const post of posts) {
    const template = createTemplate(post);
    showBigPicture(template, post);
    picturesContainer.appendChild(template);
  }
  picturesBlock.appendChild(picturesContainer);
};

export { renderTemplate };
