import { sendGetAsync } from './network.js';
import { showError } from './alert.js';
import { renderThumbnails } from './render.js';
import { adjustFiltering } from './templatesRender.js';

const SERVER_LOAD_FROM = 'https://26.javascript.pages.academy/kekstagram/data';
const LOAD_POSTS_ERROR_MESSAGE = 'Ошибка загрузки фотографий';

function loadThumbnails() {
  sendGetAsync(
    SERVER_LOAD_FROM,
    (posts) => {
      renderThumbnails(posts);
      adjustFiltering(posts, renderThumbnails);
    },
    (reason) => showError(LOAD_POSTS_ERROR_MESSAGE, reason),
  );
}

export { loadThumbnails };
