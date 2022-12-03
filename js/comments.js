const commentsToLoading = 5;
const bigPicture = document.querySelector('.big-picture');
const commentsBlock = bigPicture.querySelector('.social__comments');
const loadCommentsButton = bigPicture.querySelector('.social__comments-loader');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsRenderedCount = commentsCount.querySelector('span:nth-child(1)');
const totalComments = commentsCount.querySelector('span:nth-child(2)');
const testComment = document.querySelector('.social__comment');

let currentPhotoComments;

function renderComments(parent, comments) {
  totalComments.textContent = comments.length;
  commentsRenderedCount.textContent = '0';
  commentsBlock.innerHTML = '';
  commentsRenderedCount.textContent = renderBatchOfComments(comments).toString();
  currentPhotoComments = comments;
}

function createComment(commentObj) {
  const comment = testComment.cloneNode(true);
  const message = comment.querySelector('p');
  const avatar = comment.querySelector('img');
  avatar.alt = commentObj.name;
  avatar.src = commentObj.avatar;
  message.textContent = commentObj.message;
  return comment;
}

function renderBatchOfComments(comments) {
  const renderedComments = parseInt(commentsCount.textContent, 10);
  const notRenderedComments = comments.length - renderedComments;
  const needRender = Math.min(commentsToLoading, notRenderedComments);
  for (let i = renderedComments; i < renderedComments + needRender; i++) {
    const comment = createComment(comments[i]);
    commentsBlock.append(comment);
  }
  return needRender;
}

loadCommentsButton.addEventListener('click', (evt) => {
  const renderedComments = parseInt(commentsRenderedCount.textContent, 10);
  const newComments = renderBatchOfComments(currentPhotoComments);
  commentsRenderedCount.textContent = (renderedComments + newComments).toString();
  evt.preventDefault();
});

export { renderComments };
