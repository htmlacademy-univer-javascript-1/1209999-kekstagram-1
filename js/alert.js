const errorTemplate = document.querySelector('#error').content.querySelector('section');
const completeTemplate = document.querySelector('#success').content.querySelector('section');
const completeBlock = completeTemplate.cloneNode(true);
const error = errorTemplate.cloneNode(true);
const errorReason = error.querySelector('.error__reason');
const errorMessage = error.querySelector('.error__title');
const closeButton = error.querySelector('.error__button');
const closeCompleteButton = completeBlock.querySelector('.success__button');

document.body.append(error);
document.body.append(completeBlock);

closeCompleteButton.addEventListener('click', () => {
  completeBlock.classList.add('hidden');
});

closeButton.addEventListener('click', () => {
  error.classList.add('hidden');
});

function showError(message, reason) {
  error.classList.remove('hidden');
  errorMessage.textContent = message;
  errorReason.textContent = reason === undefined ? '' : reason;
}

function showComplete() {
  completeBlock.classList.remove('hidden');
}

export { showError, showComplete };
