import '../nouislider/nouislider.js';

const leftBorder = 25;
const rightBorder = 100;
const stepBetweenBorder = 25;

const form = document.querySelector('.img-upload__form');
const imgPreview = form.querySelector('.img-upload__preview');
const imgScale = form.querySelector('.img-upload__scale');
const filterValue = form.querySelector('.effect-level__value');
const slider = form.querySelector('.effect-level__slider');
const scaleValue = imgScale.querySelector('.scale__control--value');
const zoomButton = imgScale.querySelector('.scale__control--bigger');
const zoomOutButton = imgScale.querySelector('.scale__control--smaller');

function makeFilterInfo(filterName, valueUnit, min, max, start, step) {
  return {
    filterInfo: setInfo(filterName, valueUnit),
    sliderOptions: setOptions(min, max, start, step)
  };
}

function setOptions(min, max, start, step) {
  return {
    range: {min, max},
    start: start,
    step: step,
    connect: 'lower'
  };
}

function setInfo(filterName, valueUnit) {
  return {
    filterName: filterName,
    valueUnit: valueUnit,
  };
}

const filterInfos = {
  'sepia': makeFilterInfo('sepia', '', 0, 1, 0, 0.1),
  'marvin': makeFilterInfo('invert', '%', 0, 100, 0.1, 1),
  'phobos': makeFilterInfo('blur', 'px', 0, 3, 0, 0.1),
  'chrome': makeFilterInfo('grayscale', '', 0, 1, 0, 0.1),
  'heat': makeFilterInfo('brightness', '', 1, 3, 1, 0.1)
};

slider.classList.add('hidden');
let currentFilterClass = 'filters__preview--none';
let currentFilterInfo = filterInfos['chrome'];
noUiSlider.create(slider, currentFilterInfo.sliderOptions);


function updateScale(scale) {
  scaleValue.value = `${scale}%`;
  imgPreview.style = `transform: scale(${scale / 100})`;
}

function onScaleChange(borders, isLimit, stepsFunc) {
  const currentScale = parseInt(scaleValue.value.replace('%', ''), 10);
  if (currentScale === borders) {
    return;
  }
  const newScale = stepsFunc(currentScale, stepBetweenBorder);
  updateScale(isLimit(newScale, borders) > 0 ? borders : newScale);
}

zoomOutButton.addEventListener('click', () => onScaleChange(leftBorder,
  (a, b) => b - a, (curScale, step) => curScale - step));

zoomButton.addEventListener('click', () => onScaleChange(rightBorder,
  (a, b) => a - b, (curScale, step) => curScale + step));

form.addEventListener('change', (evt) => {
  if (!evt.target.matches('input[type="radio"]')) {
    return;
  }
  const newFilter = evt.target.value;
  updateFilterClass(newFilter);
  if (newFilter === 'none') {
    imgPreview.style.filter = 'none';
    slider.classList.add('hidden');
    return;
  }
  currentFilterInfo = filterInfos[newFilter];
  slider.noUiSlider.updateOptions(filterInfos[newFilter].sliderOptions);
  if (slider.classList.contains('hidden')) {
    slider.classList.remove('hidden');
  }
});

function createFilterString(filterInfo, value) {
  return `${filterInfo.filterName}(${value}${filterInfo.valueUnit})`;
}

function updateFilterClass(newFilterName) {
  const newFilterClass = `filters__preview--${newFilterName}`;
  imgPreview.classList.remove(currentFilterClass);
  imgPreview.classList.add(newFilterClass);
  currentFilterClass = newFilterClass;
}

slider.noUiSlider.on('update', () => {
  const value = slider.noUiSlider.get();
  const filterInfo = currentFilterInfo.filterInfo;
  imgPreview.style.filter = createFilterString(filterInfo, value);
  filterValue.value = value.toString();
});
