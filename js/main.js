// Использовал источник:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt (min, max) {
  min = Math.ceil (min);
  max = Math.floor (max);
  if (min >= 0 && max > min) {
    return Math.floor (Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return 'Введите положительное значение.';
}

function getCheckMaxStringLength (stringTest,  maxLength) {
  return stringTest.length <=  maxLength;
}

getRandomInt (1, 10);
getCheckMaxStringLength ('',  50);
