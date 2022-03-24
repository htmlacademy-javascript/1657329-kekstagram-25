import {buildDescriptionUserFoto} from './data.js';

const templeatePicture = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта
const templeateMiniature = templeatePicture.querySelector('.picture');

const userImages = document.querySelector('.pictures');

const templeateFragment = document.createDocumentFragment();

const Miniature = () => {
  buildDescriptionUserFoto().forEach(({url, likes, comments}) => {
    const miniatureElement = templeateMiniature.cloneNode(true);

    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments.length;

    templeateFragment.appendChild(miniatureElement);
  });
  userImages.appendChild(templeateFragment);
};

export {Miniature};
