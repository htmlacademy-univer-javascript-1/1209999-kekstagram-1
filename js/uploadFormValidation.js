import { checkStringLength } from './util.js';
import '../pristine/pristine.min.js';

const form = document.querySelector('.img-upload__form');
const hashtagsInputForm = document.querySelector('.text__hashtags');
const descriptionInputForm = document.querySelector('.text__description');
const hashtagTemplate = '#[A-Za-zА-Яа-яЁё0-9]{1,19}';

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

function showHashtags(hashtagsString) {
  if (hashtagsString.length === 0) {
    return true;
  }
  const hashtagsRegexp = new RegExp(`^${hashtagTemplate}( ${hashtagTemplate})*$`);
  if (!hashtagsRegexp.test(hashtagsString)) {
    return false;
  }
  const hashtagsSet = new Set();
  const hashtags = hashtagsString.split(/ /);
  for (const hashtag of hashtags) {
    const loweredCase = hashtag.toLowerCase();
    if (hashtagsSet.has(loweredCase)) {
      return false;
    }
    hashtagsSet.add(loweredCase);
  }
  return hashtagsSet.size <= 5;
}

function validateForm() {
  return pristine.validate();
}

pristine.addValidator(hashtagsInputForm, showHashtags, 'Некорректный ввод хэш-тегов');
pristine.addValidator(descriptionInputForm, (value) => checkStringLength(value, 140), 'Длина комментария не должна превышать 140 символов');


export {form, hashtagsInputForm, descriptionInputForm, validateForm};
