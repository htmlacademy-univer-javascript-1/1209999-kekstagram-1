function randomArrayElement(elements, countOfElements) {
  if (countOfElements === 2) {
    const firstElement = elements[calculateRandomNumber(0, elements.length - 1)];
    let secondElement = elements[calculateRandomNumber(0, elements.length - 1)];
    while (firstElement === secondElement) {
      secondElement = elements[calculateRandomNumber(0, elements.length - 1)];
    }
    return `${firstElement} ${secondElement}`;
  }
  return elements[calculateRandomNumber(0, elements.length - 1)];
}

function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

let timeoutId;
function debounce(callback, timeoutDelay = 500) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(callback, timeoutDelay);
}

function calculateRandomNumber(min, max) {
  if (min < 0 || min >= max) {
    throw { name: 'Invalid arguments', message: 'Invalid arguments' };
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function stringByTemplate(pattern, i) {
  const leftBracket = pattern.indexOf('{');
  const rightBracket = pattern.lastIndexOf('}');
  return pattern.substring(0, leftBracket) + i + pattern.substring(rightBracket + 1, pattern.length);
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

function randomArrayElements(n, array) {
  const set = new Set();
  for (let i = 0; i < n; i++) {
    let element;
    do {
      element = randomArrayElement(array);
    } while (set.has(element));
    set.add(element);
  }
  return Array.from(set);
}

export { randomArrayElement, calculateRandomNumber, stringByTemplate, checkStringLength, debounce, throttle, randomArrayElements };
