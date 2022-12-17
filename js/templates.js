import { showBigPicture } from './bigpicture.js';
import { adjustRenderFiltering } from './templatesRender.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesBlock = document.querySelector('.pictures');
const picturesContainer = document.createDocumentFragment();

function createTemplate(post) {
  const template = pictureTemplate.cloneNode(true);
  template.querySelector('.picture__img').setAttribute('src', post.url);
  const pictureData = template.querySelector('.picture__info');
  pictureData.querySelector('.picture__comments').textContent = post.comments.length;
  pictureData.querySelector('.picture__likes').textContent = post.likes;
  return template;
}

function doPictureRender(posts) {
  picturesBlock.querySelectorAll('.picture').forEach((picture) => picture.remove());
  for (const post of posts) {
    const template = createTemplate(post);
    showBigPicture(template, post);
    picturesContainer.appendChild(template);
  }
  picturesBlock.appendChild(picturesContainer);
};

function renderTemplate(posts) {
  doPictureRender(posts);
  adjustRenderFiltering(posts, doPictureRender);
}

export { renderTemplate };
