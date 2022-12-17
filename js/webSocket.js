import { showError, showComplete } from './alert.js';

const server = 'https://26.javascript.pages.academy/kekstagram';
const serverData = 'https://26.javascript.pages.academy/kekstagram/data';
const errorReason = 'Ошибка загрузки фотографий';

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
        showError(errorReason, reasonFromResponse(response));
      }
    })
    .catch((reason) => showError(errorReason, reason));
}

function reasonFromResponse(response) {
  return `${response.status} ${response.statusText}`;
}

function getPostsAsync(receivePostsFun) {
  fetch(serverData)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      showError(errorReason, reasonFromResponse(response));
      return [];
    })
    .then((posts) => receivePostsFun(posts))
    .catch((reason) => showError(errorReason, reason));
}

export { getPostsAsync, makeFormAsync };
