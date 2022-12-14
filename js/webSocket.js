import { showError, showComplete } from './alert.js';

const server = 'https://26.javascript.pages.academy/kekstagram';
const error_reason = 'Ошибка загрузки фотографий';

function makeFormAsync(formData) {
  fetch(server,
    {
      method: 'POST',
      body: formData
    })
    .then((response) => {
      if (response.ok) {
        showComplete();
      } else {
        showError(error_reason, reasonFromResponse(response));
      }
    })
    .catch((reason) => showError(error_reason, reason));
}

function reasonFromResponse(response) {
  return `${response.status} ${response.statusText}`;
}

function getPostsAsync(receivePostsFun) {
  fetch(server + '/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      showError(error_reason, reasonFromResponse(response));
      return [];
    })
    .then((posts) => receivePostsFun(posts))
    .catch((reason) => showError(error_reason, reason));
}

export { getPostsAsync, makeFormAsync };