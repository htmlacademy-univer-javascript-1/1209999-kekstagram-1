const errorTemplate = document.querySelector('#error').content.querySelector('section');
const successfulUploadTemplate = document.querySelector('#success').content.querySelector('section');
const errorBlock = errorTemplate.cloneNode(true);
const errorMessage = errorBlock.querySelector('.error__title');
const errorReason = errorBlock.querySelector('.error__reason');
const errorButton = errorBlock.querySelector('.error__button');
const successBlock = successfulUploadTemplate.cloneNode(true);
const successButton = successBlock.querySelector('.success__button');

document.body.append(errorBlock);
document.body.append(successBlock);

successButton.addEventListener('click', () => {
  successBlock.classList.add('hidden');
});

errorButton.addEventListener('click', () => {
  errorBlock.classList.add('hidden');
});

function showError(message, reason, callback) {
  errorBlock.classList.remove('hidden');
  errorMessage.textContent = message;
  errorReason.textContent = reason === undefined ? '' : reason;
  if (callback !== undefined) {
    callback();
  }
}

function showSuccess() {
  successBlock.classList.remove('hidden');
}

export { showError, showSuccess };
