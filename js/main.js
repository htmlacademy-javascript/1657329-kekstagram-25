const comments = [];

const numberSumObject = 25;

const userName = [
  'Инокентий',
  'Василиса',
  'Аполинарий',
  'Ефросинья',
  'Аркадий',
  'Авдосья',
  'Просковья',
  'Василевс'
];

const message = [
'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const description = [
   'Отдыхаю с наслождением',
   'Созидаю мир',
   'Размышляю над проблемами мироздания',
   'Просто отличный кадр',
   'Завораживающий вид',
   'Я и кто-то рядом',
   'Миг через призму сознания',
   'Прекрасный момент'
];

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

function getCheckMaxStringLength(stringTest, maxLength) {
  return stringTest.length <= maxLength;
};

const buildObject = () => {
  return {
    id: getRandomPositiveInteger (1, 25),
    url: 'photos/' + getRandomPositiveInteger (1,15) + '.jpg',
    description: getRandomElement (description),
    likes: getRandomPositiveInteger (15, 200)
  };
};

function buildComments () {
  return {
      id: getRandomPositiveInteger (1, 25),
      avatar: 'img/avatar-' + getRandomPositiveInteger (1, 6) + '.svg',
      message: getRandomElement (message),
      name: getRandomElement (userName)
    }
  }

const arrayWithObject = Array.from({length: numberSumObject}, buildObject);
const arrayWithComment = Array.from({length: numberSumObject}, buildComments);

console.log (arrayWithObject, arrayWithComment);
