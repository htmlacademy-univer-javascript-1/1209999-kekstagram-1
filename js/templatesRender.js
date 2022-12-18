import { randomElements, debounce } from './util.js';

const FILTER_BUTTON = 'img-filters__button--active';
const INACTIVE_FILTERS = 'img-filters--inactive';
const RERENDER_DELAY = 500;

const filtersBlock = document.querySelector('.img-filters');
const filtersForm = filtersBlock.querySelector('.img-filters__form');
const buttons = filtersForm.querySelectorAll('button');
const defaultFilterButton = document.querySelector('#filter-default');

let prevButton = defaultFilterButton;

const postsComparator = (post1, post2) => post2.likes - post1.likes;
const doRender = {
  'filter-default': (posts, render) => render(posts),
  'filter-random': (posts, render) => render(randomElements(10, posts)),
  'filter-discussed': (posts, render) => render(posts.slice().sort(postsComparator))
};

function adjustFiltering(posts, renderFun) {
  filtersBlock.classList.remove(INACTIVE_FILTERS);
  buttons.forEach((button) =>
    button.addEventListener('click', (evt) => {
      const clickedButton = evt.target;
      prevButton.classList.remove(FILTER_BUTTON);
      clickedButton.classList.add(FILTER_BUTTON);
      prevButton = clickedButton;
      const filteredRenderFun = doRender[clickedButton.id];
      debounce(() => filteredRenderFun(posts, renderFun), RERENDER_DELAY);
    }));
}

export { adjustFiltering };
