import { renderComments } from './comments.js';

const escKeycode = 27;
const bigPicture = document.querySelector('.big-picture');
const closePictureButton = document.querySelector('.big-picture__cancel');
const img = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const description = bigPicture.querySelector('.social__caption');

const showBigPicture = (picture, post) =>
  picture.addEventListener('click', () => {
    img.setAttribute('src', post.url);
    likesCount.textContent = post.likes;
    description.textContent = post.description;
    renderComments(bigPicture, post.comments);
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });

const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
};

closePictureButton.addEventListener('click', closeBigPicture);
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === escKeycode) {
    closeBigPicture();
  }
});

export { showBigPicture };
