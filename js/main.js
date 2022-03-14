const TOTAL_PHOTOS = 25;
const AVATAR_MIN_VALUE = 1;
const AVATAR_MAX_VALUE = 6;
const LIKES_MIN_VALUE = 15;
const LIKES_MAX_VALUE = 200;

const USER_NAMES = [
  'Инокентий',
  'Василиса',
  'Аполинарий',
  'Ефросинья',
  'Аркадий',
  'Авдосья',
  'Просковья',
  'Василевс'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Отдыхаю с наслаждением',
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

const getRandomPositiveInteger = (minNumber, maxNumber) => {
  const lower = Math.ceil(Math.min(Math.abs(minNumber), Math.abs(maxNumber)));
  const upper = Math.floor(Math.max(Math.abs(minNumber), Math.abs(maxNumber)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const buildComments = () => {
  const comments = [];
  for (let i = 1; i <= getRandomPositiveInteger(AVATAR_MIN_VALUE, AVATAR_MAX_VALUE); i++) {
    comments.push({
      id: i,
      avatar: `img/avatar-${getRandomPositiveInteger(AVATAR_MIN_VALUE, AVATAR_MAX_VALUE)}.svg`,
      message: getRandomElement(MESSAGES),
      name: getRandomElement(USER_NAMES)
    });
  }
  return comments;
};

const buildDescriptionUserFoto = () => {
  const descriptionUserFotos = [];
  for (let i = 1; i <= TOTAL_PHOTOS; i++) {
    descriptionUserFotos.push ({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomElement(DESCRIPTIONS),
      likes: getRandomPositiveInteger(LIKES_MIN_VALUE, LIKES_MAX_VALUE),
      comments: buildComments()
    });
  }

  return descriptionUserFotos;
};

buildDescriptionUserFoto();
