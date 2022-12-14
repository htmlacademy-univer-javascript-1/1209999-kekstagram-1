const leftBorder = 25;
const rightBorder = 100;
const stepBetweenBorder = 25;

const form = document.querySelector('.img-upload__form');
const imgPreview = form.querySelector('.img-upload__preview');
const imgScale = form.querySelector('.img-upload__scale');
const scaleValue = imgScale.querySelector('.scale__control--value');
const zoomButton = imgScale.querySelector('.scale__control--bigger');
const zoomOutButton = imgScale.querySelector('.scale__control--smaller');

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
