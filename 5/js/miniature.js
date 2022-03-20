import {buildDescriptionUserFoto} from './data.js';

const template = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта
const templeateMiniature = template.querySelector('.picture');

const pictures = document.querySelector('.pictures');

const templateFragment = document.createDocumentFragment();

const arrayMiniature = buildDescriptionUserFoto();

const cteateMiniature = () => {
  arrayMiniature.forEach(({url, likes, comments}) => {
    const miniatureElement = templeateMiniature.cloneNode(true);

    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments.length;

    templateFragment.appendChild(miniatureElement);
  });
  pictures.appendChild(templateFragment);
};

export {arrayMiniature, cteateMiniature};
