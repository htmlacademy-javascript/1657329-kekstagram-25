const USER_NAME = [
  'Инокентий',
  'Василиса',
  'Аполинарий',
  'Ефросинья',
  'Аркадий',
  'Авдосья',
  'Просковья',
  'Василевс'
];

const MESSAGE = [
'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
   'Отдыхаю с наслождением',
   'Созидаю мир',
   'Размышляю над проблемами мироздания',
   'Просто отличный кадр',
   'Завораживающий вид',
   'Я и кто-то рядом',
   'Миг через призму сознания',
   'Прекрасный момент'
];

const NUMBER_SUM_OBJECT = 25;

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

const getShuffledItems = (items) => {
  const shuffledItems = items.slice().sort(() => Math.random() - 0.5);

  return shuffledItems;
}

const buildComments = () => {
  let comments = [];
  for (let i = 1; i <= getRandomPositiveInteger (1, 6); i++) {
    comments.push({
      id: i,
      avatar: 'img/avatar-' + getRandomPositiveInteger (1, 6) + '.svg',
      message: getRandomElement (MESSAGE),
      name: getRandomElement (USER_NAME)
    })
  };
  return comments;
};

const buildObjects = () => {
  let objects = [];
  for (let i = 1; i <= NUMBER_SUM_OBJECT; i++) {
    objects.push ({
      id: i,
      url: 'photos/' + i + '.jpg',
      description: getRandomElement (DESCRIPTION),
      likes: getRandomPositiveInteger (15, 200),
      comments: buildComments ()
    })
  };
  return objects;
};

const arrayWithObject = buildObjects ();

console.log (arrayWithObject);
