import { form, hashtagsInput, descriptionInput, validateForm } from './uploadFormValidation.js';

const escKeycode = 27;
const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const closeFormButton = document.querySelector('#upload-cancel');

form.addEventListener('submit', (evt) => {
  if (!validateForm()) {
    evt.preventDefault();
  }
});

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

closeFormButton.addEventListener('click', closeForm);
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === escKeycode && !(evt.target.matches('input') || evt.target.matches('textarea'))) {
    evt.preventDefault();
    closeForm();
  }
});

function closeForm() {
  document.body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');
  uploadFile.name = '';
  descriptionInput.value = '';
  hashtagsInput.value = '';
}

