// Использовал источник:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   if (min >= 0 && max > min) {
//     return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
//   }

//   return 'Введите положительное значение.';
// }

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}


function getCheckMaxStringLength(stringTest, maxLength) {
  return stringTest.length <= maxLength;
}

getRandomPositiveInteger(1, 10);
getCheckMaxStringLength('', 50);
