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

export { randomArrayElement, calculateRandomNumber, stringByTemplate, checkStringLength };
