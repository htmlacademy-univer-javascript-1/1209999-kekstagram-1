import { randomArrayElements, debounce } from './util.js';

const filtres = document.querySelector('.img-filters');
const defaultFilter = document.querySelector('#filter-default');
const filtersForm = filtres.querySelector('.img-filters__form');
const buttons = filtersForm.querySelectorAll('button');

const defaultFilterButton = 'img-filters__button--active';
const inactiveFilter = 'img-filters--inactive';
const delay = 500;
const postsComparator = (post1, post2) => post2.likes - post1.likes;

let prevClickedButton = defaultFilter;

const doFilterRender = {
  'filter-default': (posts, render) => render(posts),
  'filter-random': (posts, render) => render(randomArrayElements(10, posts)),
  'filter-discussed': (posts, render) => render(posts.slice().sort(postsComparator))
};

function adjustRenderFiltering(posts, renderFun) {
  filtres.classList.remove(inactiveFilter);
  buttons.forEach((button) =>
    button.addEventListener('click', (evt) => {
      const clickedButton = evt.target;
      prevClickedButton.classList.remove(defaultFilterButton);
      clickedButton.classList.add(defaultFilterButton);
      prevClickedButton = clickedButton;
      const renderFilter = doFilterRender[clickedButton.id];
      debounce(() => renderFilter(posts, renderFun), delay);
    }));
}

export { adjustRenderFiltering };
