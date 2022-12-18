import '../nouislider/nouislider.js';
import {form, imagePreview} from './util.js';

const defaultButton = document.querySelector('#effect-none');
const slider = form.querySelector('.effect-level__slider');
const effectLevel = form.querySelector('.effect-level__value');

const effectInfos = {
  'chrome': makeFilterInfo('chrome', 'grayscale', '', 0, 1, 0, 0.1),
  'sepia': makeFilterInfo('sepia', 'sepia', '', 0, 1, 0, 0.1),
  'marvin': makeFilterInfo('marvin', 'invert', '%', 0, 100, 0.1, 1),
  'phobos': makeFilterInfo('phobos', 'blur', 'px', 0, 3, 0, 0.1),
  'heat': makeFilterInfo('heat', 'brightness', '', 1, 3, 1, 0.1),
  'none': makeFilterInfo('none', 'grayscale', '', 0, 0, 0, 0)
};

slider.classList.add('hidden');
let currentFilterInfo = effectInfos['none'];
noUiSlider.create(slider, currentFilterInfo.sliderOptions);

slider.noUiSlider.on('update', () => {
  const value = slider.noUiSlider.get();
  imagePreview.style.filter = currentFilterInfo.getStyle(value);
  effectLevel.value = value.toString();
});

form.addEventListener('change', (evt) => {
  if (!evt.target.matches('input[type="radio"]')) {
    return;
  }
  const newFilter = evt.target.value;
  changeFilter(newFilter);
});

function changeFilter(newFilter) {
  imagePreview.classList.remove(currentFilterInfo.effectClass);
  if (newFilter === 'none') {
    slider.classList.add('hidden');
  } else {
    slider.classList.remove('hidden');
  }
  currentFilterInfo = effectInfos[newFilter];
  imagePreview.classList.add(currentFilterInfo.effectClass);
  slider.noUiSlider.updateOptions(currentFilterInfo.sliderOptions);
  slider.noUiSlider.set(currentFilterInfo.sliderOptions.start);
}

function makeFilterInfo(effectName, styleName, styleValueUnit, sliderMin, sliderMax, sliderStart, sliderStep) {
  return {
    effectClass: `effects__preview--${effectName}`,
    sliderOptions: makeSliderOptions(sliderMin, sliderMax, sliderStart, sliderStep),
    getStyle(value) {
      return `${styleName}(${value}${styleValueUnit}`;
    },
  };
}

function makeSliderOptions(min, max, start, step) {
  return {
    range: {min, max},
    start: start,
    step: step,
    connect: 'lower'
  };
}

function resetEffects() {
  defaultButton.click();
}

export { resetEffects };
