import {buildDescriptionUserFoto} from './data.js';

const templatePicture = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта
const templateMiniature = templatePicture.querySelector('.picture');

const userImage = document.querySelector('.pictures');

const templateFragment = document.createDocumentFragment();

const createMiniature = () => {
  buildDescriptionUserFoto().forEach(({url, likes, comments}) => {
    const miniatureElement = templateMiniature.cloneNode(true);

    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments.length;

    templateFragment.appendChild(miniatureElement);
  });
  userImage.appendChild(templateFragment);
};

export {createMiniature};
