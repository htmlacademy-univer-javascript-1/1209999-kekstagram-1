import { form, hashtagsInputForm, descriptionInputForm, validateForm } from './uploadFormValidation.js';
import { makeFormAsync } from './webSocket.js';
import './photoFilter.js';
import './scalePhoto.js';

const escKeycode = 27;
const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const closeFormButton = document.querySelector('#upload-cancel');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!validateForm()) {
    return;
  }
  makeFormAsync(new FormData(evt.target));
  closeForm();
});

function closeForm() {
  document.body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');
  uploadFile.name = '';
  descriptionInputForm.value = '';
  hashtagsInputForm.value = '';
}


closeFormButton.addEventListener('click', closeForm);
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === escKeycode && !(evt.target.matches('input') || evt.target.matches('textarea'))) {
    evt.preventDefault();
    closeForm();
  }
});

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
});
