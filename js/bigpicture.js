const escKeycode = 27;
const bigPicture = document.querySelector('.big-picture');
const img = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const description = bigPicture.querySelector('.social__caption');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsBlock = bigPicture.querySelector('.social__comments');


const commentToHtml = (comment) =>
  '<li class="social__comment">\n' +
  '    <img\n' +
  '        class="social__picture"\n' +
  `        src="${comment.avatar}"` +
  `        alt="${comment.name}"` +
  '        width="35" height="35">\n' +
  `    <p class="social__text">${comment.message}}</p>\n` +
  '</li>';

const displayComments = (comments) => {
  commentsBlock.innerHTML = '';
  comments.forEach((comment) => {
    const commentLayout = commentToHtml(comment);
    commentsBlock.insertAdjacentHTML('afterbegin', commentLayout);
  });
};

const showBigPicture = (picture, post) =>
  picture.addEventListener('click', () => {
    img.setAttribute('src', post.url);
    likesCount.textContent = post.likes;
    commentsCount.textContent = post.comments.length;
    description.textContent = post.description;
    displayComments(post.comments);
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });

const closePicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
};

bigPicture.querySelector('.social__comment-count').classList.add('hidden');
bigPicture.addEventListener('click', closePicture);
document.addEventListener('keydown', (evnt) => {
  if (evnt.keyCode === escKeycode) {
    closePicture();
  }
});

export { showBigPicture };

