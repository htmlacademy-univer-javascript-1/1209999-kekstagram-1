const bigPictures = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');


const getComments = (comments) => {
  const socialComments = document.querySelector('.social__comments');
  const commentsPart = document.createDocumentFragment();
  comments.forEach((comment) => {
    const socialComment = document.querySelector('.social__comment').cloneNode(true);
    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').textContent = comment.message;
    commentsPart.appendChild(socialComment);
  });
  socialComments.innerHTML = '';
  socialComments.appendChild(commentsPart);
};

const renderPicture = (picture) => {
  bigPictures.querySelector('.social__comment-count').classList.add('hidden');
  bigPictures.querySelector('.comments-loader').classList.add('hidden');
  bigPictures.querySelector('.big-picture__img img').src = picture.url;
  bigPictures.querySelector('.likes-count').textContent = picture.likes;
  bigPictures.querySelector('.social__caption').textContent = picture.description;
  bigPictures.querySelector('.comments-count').textContent = picture.comments.length;
  getComments(picture.comments);
};

const closePicture = () => {
  document.body.classList.remove('modal-open');
  bigPictures.classList.add('hidden');
};

const escKeydown = (evt) => {
  if(evt.key === 'Escape') {
    closePicture();
    document.removeEventListener('keydown', escKeydown);
  }
};

const picturesCloseButton = () => {
  closePicture();
  closeButton.removeEventListener('click', picturesCloseButton);
  document.removeEventListener('keydown', escKeydown);
};


const visualiseBigPicture = (picture) => {
  document.body.classList.add('modal-open');
  bigPictures.classList.remove('hidden');
  renderPicture(picture);
  closeButton.addEventListener('click', picturesCloseButton);
  document.addEventListener('keydown', escKeydown);
};

export { visualiseBigPicture };
