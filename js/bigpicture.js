import { renderComments } from './comments.js';

const ESC_KEYCODE = 27;

const bigPicture = document.querySelector('.big-picture');
const closePictureButton = document.querySelector('.big-picture__cancel');
const img = bigPicture.querySelector('.big-picture__img').querySelector('img');
const imgLikesCount = bigPicture.querySelector('.likes-count');
const description = bigPicture.querySelector('.social__caption');

function closeBigPicture() {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
}

closePictureButton.addEventListener('click', closeBigPicture);
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESC_KEYCODE) {
    closeBigPicture();
  }
});

function adjustDisplayingAsBigPicture(picture, post) {
  picture.addEventListener('click', () => {
    img.setAttribute('src', post.url);
    imgLikesCount.textContent = post.likes;
    description.textContent = post.description;
    renderComments(bigPicture, post.comments);
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });
}

export { adjustDisplayingAsBigPicture };
